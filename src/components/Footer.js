import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About ZheyGo</h3>
          <p>Fast and reliable food delivery service in Bhutan.</p>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook"><FaFacebook /></a>
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/restaurants">Restaurants</Link></li>
            <li><Link to="/download">Download App</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaPhone /> +975 17 123 456</p>
          <p><FaEnvelope /> support@zheygo.bt</p>
          <p>Thimphu, Bhutan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ZheyGo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
