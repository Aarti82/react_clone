import React from "react";
import "./Contact.css"; // optional: agar aap styling chahte ho

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="h2">Contact Us</h2>
      <form className="contact-form">
        <div>
          <label className="l1">Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label className="l1">Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label className="l1">Message:</label>
          <textarea placeholder="Write your message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
