const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const sendEmail = require("../utils/sendEmail");


//Routes    backendum linker enq stexcum vor get zapros uxarkenq te inch ga patasxanic

router.get('/', (req, res) => {

    Category.find({})
        .then((data) => {
            console.log('Data', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error', daerrorta);
        })
});


router.post('/sendemail', async (req, res) => {
    const { email } = req.body;
    const { info } = req.body;
    // console.log(req.body);
    try {
        const send_to = email;
        const sent_from = process.env.EMAIL_USER;
        const subject = "Новый заказ";
        const message = `
          ${info}
      `;

        await sendEmail(subject, message, send_to, sent_from);
        res.status(200).json({ success: true, message: "Email Sent" });
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.get('/name', (req, res) => {
    const data = {
        username: 'pugi',
        age: 4
    };
    res.json(data);
});


module.exports = router;