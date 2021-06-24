import React from "react";
import "./ContactForm.css";
import axios from "axios";

export default function ContactForm() {
  const [sent, setSent] = React.useState("");
  const [status, setStatus] = React.useState("Submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(<div className="appendMovingDots">Sending</div>);
    const { name, email, subject, message } = e.target.elements;
    const data = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    axios
      .post("/api/forma", data)
      .then((res) => {
        if (res) {
          setSent(
            <div className="sentmsg1">Your message was succefully sent.</div>
          );
          resetForm(name, email, message, subject);
        }
      })
      .catch((err) => {
        if (err) {
          setSent(<div className="sentmsg2">Your message was not sent.</div>);
          resetForm(name, email, message, subject);
          console.log("message not sent");
        }
      });
  };
  const resetForm = (name, email, subject, message) => {
    setTimeout(() => {
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
      setSent("");
      setStatus("Submit");
    }, 3000);
  };
  return (
    <div className="formWapper">
      {sent}
      <form onSubmit={handleSubmit}>
        <label className="style">Full name</label>
        <input id="name" required type="text" placeholder="Your full name" />
        <label>Email</label>
        <input id="email" required type="email" placeholder="Your email" />
        <label>Subject</label>
        <input id="subject" type="text" placeholder="Optional" />
        <label>Message</label>
        <textarea
          id="message"
          type="text"
          required
          placeholder="what's on you mind"
        />
        <button type="submit" className="btn">
          {status}
        </button>
      </form>
    </div>
  );
}
