const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const dotenv = require("dotenv");
dotenv.config();

const myOAuth2Client = new OAuth2(process.env.GMAIL_OAUTH_CLIENT_ID, process.env.GMAIL_OAUTH_CLIENT_SECRET, "https://developers.google.com/oauthplayground");

myOAuth2Client.setCredentials({
  refresh_token: process.env.GMAIL_OAUTH_REFRESH_TOKEN,
});

const myAccessToken = myOAuth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  host: process.env.GMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL_OAUTH_EMAIL,
    // pass: process.env.GMAIL_PASSWORD,
    clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
    clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN,
    accessToken: myAccessToken,
  },
});

router.post("/", (request, response) => {
  try {
    const mailOptions = {
      from: request.body.email,
      to: `${process.env.GMAIL_MILLZ}`,
      // to: `${process.env.GMAIL_ROB}`,
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
