const express = require("express");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Twilio Configuration
const accountSid = "your_twilio_account_sid";
const authToken = "your_twilio_auth_token";
const client = twilio(accountSid, authToken);

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_office_email@gmail.com",
    pass: "your_email_password",
  },
});

app.use(cors());
app.use(bodyParser.json());

app.post("/submit-form", async (req, res) => {
  const { name, mobile, city, email } = req.body;

  // Send Email
  const mailOptions = {
    from: email,
    to: "your_office_email@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nPhone: ${mobile}\nCity: ${city}\nEmail: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    // Send SMS
    await client.messages.create({
      body: `New form submission from ${name}. Phone: ${mobile}. Email: ${email}.`,
      from: "your_twilio_number",
      to: "office_phone_number",
    });

    res.status(200).send("Form submitted successfully.");
  } catch (error) {
    res.status(500).send("Error submitting form.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
