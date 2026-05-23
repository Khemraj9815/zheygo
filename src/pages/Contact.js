import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Call Us',
      content: '+975 2 323466',
      subtext: 'Available 24/7'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      content: 'support@zheygo.bt',
      subtext: 'We reply within 2 hours'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      content: 'Thimphu, Bhutan',
      subtext: 'Main Office'
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      content: '9:00 AM - 9:00 PM',
      subtext: 'Monday - Sunday'
    }
  ];

  const faqs = [
    {
      category: 'Orders',
      items: [
        { q: 'How do I place an order?', a: 'Download our app or visit our website, select a restaurant, choose items, and checkout.' },
        { q: 'Can I schedule an order?', a: 'Yes, you can schedule orders up to 7 days in advance through the app.' }
      ]
    },
    {
      category: 'Payments',
      items: [
        { q: 'What payment methods are accepted?', a: 'We accept credit cards, debit cards, mobile money, and cash on delivery.' },
        { q: 'Is my payment secure?', a: 'Yes, all payments are encrypted with industry-standard security protocols.' }
      ]
    },
    {
      category: 'Delivery',
      items: [
        { q: 'How long does delivery take?', a: 'Typically 30-50 minutes depending on restaurant and location.' },
        { q: 'Are there delivery charges?', a: 'Yes, delivery charges vary based on distance. Some promotions include free delivery.' }
      ]
    }
  ];

  return (
    <main className="contact">
      {/* Hero Section */}
      <section className="hero">
        <h1>Contact Us</h1>
        <p>We're here to help. Get in touch with us anytime</p>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="contact-cards">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <div className="card-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              <p className="main-content">{info.content}</p>
              <p className="subtext">{info.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-form-section">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+975 17 123456"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>

        <div className="map-container">
          <h2>Our Location</h2>
          <div className="map-placeholder">
            <span className="map-icon">🗺️</span>
            <p>ZheyGo Headquarters</p>
            <p className="map-address">Thimphu, Bhutan</p>
          </div>
          <div className="map-details">
            <h4>Office Address</h4>
            <p>ZheyGo Bhutan Ltd.</p>
            <p>Thimphu</p>
            <p>Bhutan</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faqCategory, idx) => (
            <div key={idx} className="faq-category">
              <h3>{faqCategory.category}</h3>
              <div className="faq-items">
                {faqCategory.items.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <details>
                      <summary>{faq.q}</summary>
                      <p>{faq.a}</p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Options */}
      <section className="support-options">
        <h2>How Can We Help?</h2>
        <div className="support-grid">
          <div className="support-card">
            <span className="support-icon">🎯</span>
            <h3>Track Your Order</h3>
            <p>Real-time order tracking available in the app</p>
            <a href="/download" className="support-link">Go to App →</a>
          </div>
          <div className="support-card">
            <span className="support-icon">💡</span>
            <h3>Tips & Tricks</h3>
            <p>Learn how to get the most out of ZheyGo</p>
            <a href="/how-it-works" className="support-link">Learn More →</a>
          </div>
          <div className="support-card">
            <span className="support-icon">🏪</span>
            <h3>Restaurant Inquiry</h3>
            <p>Partner with us and grow your business</p>
            <a href="#" className="support-link">Contact Business →</a>
          </div>
          <div className="support-card">
            <span className="support-icon">🚚</span>
            <h3>Delivery Issues</h3>
            <p>Report or resolve delivery problems</p>
            <a href="#" className="support-link">Report Issue →</a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to get exclusive deals and updates</p>
        <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); }}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
