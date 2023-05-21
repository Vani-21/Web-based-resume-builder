import React, { useState } from 'react';
import './ContactUs.css'; // import the CSS file for styling

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const to = 'nayakvani21@gmail.com';
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-us-container">
      <h1 style={{fontSize:"40px"}}><b>Contact Us</b></h1>
      <p>Have a question or feedback? We'd love to hear from you!</p>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </label>
        <br />
        <button class="button" type="button" onClick={handleSend}>Send</button>
      </form>
    </div>
  );
};

export default ContactUs;