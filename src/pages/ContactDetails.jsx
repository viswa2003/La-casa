

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './ContactDetails.css'; // Import the CSS file

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <h1>Contact Details</h1>

      <div className="contact-info">
        <h2><FaMapMarker /> Address</h2>
        <p>123 Main Street</p>
        <p>City, State, Zip</p>
      </div>

      <div className="contact-info">
        <h2><FaPhone /> Phone</h2>
        <p>Phone Number: (123) 456-7890</p>
        <p>Fax: (123) 456-7890</p>
      </div>

      <div className="contact-info">
        <h2><FaEnvelope /> Email</h2>
        <p>Email: info@example.com</p>
        <p>Support: support@example.com</p>
      </div>

      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="#" className="icon-link"><FaFacebook /></a>
          <a href="#" className="icon-link"><FaTwitter /></a>
          <a href="#" className="icon-link"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
