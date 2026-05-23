import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronDown } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [newsletter, setNewsletter] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletter('');
    alert('Thank you for subscribing!');
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+975 17 123 456',
      description: 'Call us between 8 AM - 10 PM'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'support@zheygo.bt',
      description: 'We reply within 24 hours'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: 'Thimphu, Bhutan',
      description: 'Central location in Thimphu'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: '24/7 Support',
      description: 'Always available to help'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How can I report an issue with my order?',
      answer: 'You can report issues directly through the app. Go to your order, tap "Help," and select the issue. Our team will get back to you within 2 hours.'
    },
    {
      id: 2,
      question: 'Can I become a restaurant partner?',
      answer: 'Yes! We\'re always looking for great restaurants to join our platform. Email us at partners@zheygo.bt with your restaurant details.'
    },
    {
      id: 3,
      question: 'Can I work as a delivery partner?',
      answer: 'Absolutely! Visit our careers page or email careers@zheygo.bt. We have flexible opportunities for delivery partners.'
    },
    {
      id: 4,
      question: 'How do I change my account information?',
      answer: 'Open the app, go to "My Account," and edit your profile. You can update your name, address, phone, and payment methods.'
    },
    {
      id: 5,
      question: 'Is there a loyalty program?',
      answer: 'Yes! You earn points on every order. Check your account to see your points balance and available rewards.'
    },
    {
      id: 6,
      question: 'How do I delete my account?',
      answer: 'Go to Account Settings > Privacy > Delete Account. Your data will be permanently deleted.'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help! Reach out to us anytime</p>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info">
        <h2>Get In Touch</h2>
        <div className="contact-cards">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              <p className="contact-details">{info.details}</p>
              <p className="contact-description">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send us a Message</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more..."
                rows="5"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Visit Us</h2>
        <div className="map-placeholder">
          <p>📍 ZheyGo Headquarters</p>
          <p>Thimphu, Bhutan</p>
          <p>Open 24/7</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className={`faq-question ${activeAccordion === faq.id ? 'active' : ''}`}
                onClick={() => setActiveAccordion(activeAccordion === faq.id ? null : faq.id)}
              >
                <span>{faq.question}</span>
                <FaChevronDown className="chevron" />
              </button>
              {activeAccordion === faq.id && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for exclusive deals and updates</p>
        <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
          <input
            type="email"
            value={newsletter}
            onChange={(e) => setNewsletter(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>

      {/* Support Options */}
      <section className="support-options">
        <h2>More Ways to Connect</h2>
        <div className="support-grid">
          <div className="support-card">
            <h3>💬 Live Chat</h3>
            <p>Chat with our team directly in the app for instant support.</p>
          </div>
          <div className="support-card">
            <h3>📱 WhatsApp</h3>
            <p>Message us on WhatsApp for quick responses.</p>
          </div>
          <div className="support-card">
            <h3>📧 Email Support</h3>
            <p>Send detailed issues to support@zheygo.bt</p>
          </div>
          <div className="support-card">
            <h3>🐦 Social Media</h3>
            <p>Follow us on Facebook and Instagram for updates.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
