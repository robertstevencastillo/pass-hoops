const sgMail = require('@sendgrid/mail');
const dotenv = require("dotenv");
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const emailFromCustomer = function (request, response) {
    const message = {
        from: request.body.email,
        to: `${process.env.GMAIL_MILLZ}`,
        subject: `Training Inquiry: ${request.body.firstName} ${request.body.lastName}`,
        html: `${request.body.message} <p> Customer's Phone Number: ${request.body.phoneNumber}</p>`,
        text: `${request.body.message} - Customer's Phone Number: ${request.body.phoneNumber}`
    };
    sgMail.send(message)
        .then(() => {
            response.send({
                success: true,
                message: "Email sent successfully",
            });
        })
        .catch((error) => {
            console.log(error);
            if (error.response) {
                console.error(error.response.body);
            }
        })
}

module.exports = emailFromCustomer