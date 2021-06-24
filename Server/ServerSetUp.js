const express = require("express");
const bodyparse = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyparser = require("body-parser");

require("dotenv").config();

const app = express();
app.use(bodyparser.json());
app.use(bodyparse.urlencoded({ extended: true }));
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World!"); // This will serve your request to '/'.
});

app.post("/api/forma", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  let mailOptions = {
    from: data.email,
    to: process.env.EMAIL,
    subject: data.subject,
    html: `<h3>Informations</h3> <ul>
   <li> Name: ${data.name} <li>
   Email: ${data.email}</li></ul>
   <h3>Message</h3>
   <p> ${data.message}</p> </li> `,
  };
  smtpTransport.sendMail(mailOptions, (error) => {
    if (error) {
      res.send(error);
      console.log(res.send(error));
    } else {
      res.send("Succes");
    }
  });
  smtpTransport.close();
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
