// ContactInfoPage.js

import React from 'react';
import './style.css';

const ContactInfoPage = () => {
  return (
    <div className="contact-info-container">
      <h1>Contact Information</h1>
      <div className="contact-info">
        <p><strong>Email:</strong> example@email.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Street, City, Country</p>
      </div>
    </div>
  );
}

export default ContactInfoPage;
