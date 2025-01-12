const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Twilio Setup
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/submit-form', (req, res) => {
  const { name, mobile, city, email } = req.body;

  // Send email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'office@example.com',
    subject: 'New Contact Us Form Submission',
    text: `New submission from ${name}\nEmail: ${email}\nPhone: ${mobile}\nCity: ${city}`,
  };

  // Send SMS
  twilioClient.messages.create({
    body: `New Contact Us Form submission: ${name} (${mobile}, ${email}, ${city})`,
    from: '+1234567890', // Your Twilio number
    to: '+0987654321',   // Your office number
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Form submitted successfully');
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
