// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="footer-content">
        <div className="contact-info">
          <h3>צור קשר</h3>
          <p>Rotemfri1@gmail.com</p>
          <p>050-4711139</p> 
        </div>
        <div className="social-icons">
        <a href="https://instagram.com/rotem_sharabi2?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/yosefashara" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://wa.me/+972504711139?text=%D7%A9%D7%9C%D7%95%D7%9D%20%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%90%D7%9C%D7%99%D7%9A%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%91%D7%A8%D7%A8%20%D7%91%D7%A7%D7%A9%D7%A8%20%D7%9C%D7%A1%D7%93%D7%A0%D7%94" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="mailto:Rotemfri1@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:+972504711139" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPhone} />
          </a>
          {/* להוסיף קישורים לרשתות חברתיות נוספות כפי שנדרש */}
        </div>
      </div>
      {/* <div className="copyright">
        <p>&copy; 2023 שם החברה שלך. כל הזכויות שמורות.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
