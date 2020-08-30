const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const dotenv = require("dotenv");
dotenv.config();

//  Temporary until we get the mail domain from pass hoops working
const auth = {
  auth: {
    api_key: `${process.env.MAILGUN_PRIVATE_KEY}`,
    domain: `${process.env.MAILGUN_DOMAIN}`,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

router.post("/", (request, response) => {
  try {
    const mailOptions = {
      from: request.body.email,
      to: `${process.env.GMAIL_MILLZ}`,
      // to: `${process.env.GMAIL_OAUTH_EMAIL}`,
      subject: `Training Inquiry: ${request.body.firstName} ${request.body.lastName}`,
      html: `${request.body.message} <p> Customer's Phone Number: ${request.body.phoneNumber}</p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        response.status(500).send({
          success: false,
          message: "Email failed to send",
        });
      } else {
        response.send({
          success: true,
          message: "Email sent successfully",
        });
      }
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      message: "Email failed to send.",
    });
  }
});

module.exports = router;
