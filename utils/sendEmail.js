require('dotenv').config();
const nodemailer = require('nodemailer')

// Step 1

const sendEMail = async (subject, message, send_to, sent_from) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })


    //Step 2
    let mailOptions = {
        from: sent_from,
        to: send_to,
        subject: subject,
        text: message
    }

    //Step 3

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log('Error while sending Email', err)
        } else {
            console.log("Email sent!!!")
        }

    })
}
module.exports = sendEMail