import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [sent, setSent] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target.elements;
    const data = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    console.log(data);
    setSent("Your message was sent!..");
    resetForm(name, email, subject, message);
  };
  const resetForm = (name, email, subject, message) => {
    setTimeout(() => {
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
      setSent("");
    }, 3000);
  };
  return (
    <div className="formWapper">
      <div style={{ color: "green" }}>{sent}</div>
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
          submit
        </button>
      </form>
    </div>
  );
}
