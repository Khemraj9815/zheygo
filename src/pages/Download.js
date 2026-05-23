import React, { useState } from 'react';
import { FaApple, FaAndroid, FaChevronDown } from 'react-icons/fa';
import './Download.css';

function Download() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const features = [
    { emoji: '🎯', title: 'Easy Ordering', description: 'Simple and intuitive interface for quick orders' },
    { emoji: '📍', title: 'Real-time Tracking', description: 'Track your order and delivery partner in real-time' },
    { emoji: '💰', title: 'Great Deals', description: 'Exclusive app-only discounts and offers' },
    { emoji: '🔔', title: 'Push Notifications', description: 'Get updates on your orders instantly' },
    { emoji: '⭐', title: 'User Reviews', description: 'Read verified reviews from real customers' },
    { emoji: '❤️', title: 'Saved Favorites', description: 'Save your favorite restaurants and orders' }
  ];

  const requirements = [
    { os: 'iOS', version: '12.0 or later', size: '85 MB' },
    { os: 'Android', version: '8.0 or later', size: '72 MB' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'Is the app free to download?',
      answer: 'Yes! The app is completely free to download. We only charge for food and delivery.'
    },
    {
      id: 2,
      question: 'Is my payment information secure?',
      answer: 'Absolutely. We use industry-standard encryption to protect all payment information.'
    },
    {
      id: 3,
      question: 'How much storage space does the app need?',
      answer: 'The app requires about 70-90 MB of storage space depending on your device.'
    },
    {
      id: 4,
      question: 'Can I use the web version instead?',
      answer: 'We primarily support the mobile app for the best experience. A web version is coming soon.'
    },
    {
      id: 5,
      question: 'How often is the app updated?',
      answer: 'We release updates regularly with new features, bug fixes, and improvements.'
    },
    {
      id: 6,
      question: 'What if I have problems with the app?',
      answer: 'Our support team is available 24/7 to help. Contact us through the app or email.'
    }
  ];

  const comparison = [
    { feature: 'Easy Ordering', app: true, web: false },
    { feature: 'Real-time Tracking', app: true, web: false },
    { feature: 'Push Notifications', app: true, web: false },
    { feature: 'Offline Access', app: true, web: false },
    { feature: 'App-only Deals', app: true, web: false },
    { feature: 'Account Management', app: true, web: true }
  ];

  return (
    <div className="download">
      {/* Hero Section */}
      <section className="download-hero">
        <h1>Download ZheyGo</h1>
        <p>Get fast food delivery right in your pocket</p>
        <div className="download-buttons">
          <a href="#" className="btn btn-primary">
            <FaApple /> Download on iOS
          </a>
          <a href="#" className="btn btn-primary">
            <FaAndroid /> Get on Android
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="download-features">
        <h2>App Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-emoji">{feature.emoji}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* System Requirements */}
      <section className="system-requirements">
        <h2>System Requirements</h2>
        <div className="requirements-grid">
          {requirements.map((req, index) => (
            <div key={index} className="requirement-card">
              <div className="req-icon">
                {req.os === 'iOS' ? <FaApple /> : <FaAndroid />}
              </div>
              <h3>{req.os}</h3>
              <p><strong>Version:</strong> {req.version}</p>
              <p><strong>Size:</strong> {req.size}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App vs Web Comparison */}
      <section className="comparison">
        <h2>App vs Web Experience</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Mobile App</th>
                <th>Web Version</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, index) => (
                <tr key={index}>
                  <td>{item.feature}</td>
                  <td className={item.app ? 'yes' : 'no'}>
                    {item.app ? '✓' : '✗'}
                  </td>
                  <td className={item.web ? 'yes' : 'no'}>
                    {item.web ? '✓' : '✗'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="comparison-note">The mobile app offers the best experience with real-time tracking and notifications.</p>
      </section>

      {/* Screenshots Preview */}
      <section className="screenshots">
        <h2>App Screenshots</h2>
        <div className="screenshots-grid">
          <div className="screenshot-card">
            <div className="screenshot-placeholder">📱 Browse</div>
            <p>Browse thousands of restaurants</p>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder">🍽️ Order</div>
            <p>Easy and quick ordering</p>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder">📍 Track</div>
            <p>Real-time delivery tracking</p>
          </div>
          <div className="screenshot-card">
            <div className="screenshot-placeholder">💳 Pay</div>
            <p>Secure payment options</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="download-faq">
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

      {/* CTA Section */}
      <section className="download-cta">
        <h2>Download ZheyGo Today</h2>
        <p>Join thousands of happy customers enjoying convenient food delivery</p>
        <div className="cta-buttons">
          <a href="#" className="btn btn-primary">
            <FaApple /> iOS App Store
          </a>
          <a href="#" className="btn btn-primary">
            <FaAndroid /> Google Play Store
          </a>
        </div>
      </section>
    </div>
  );
}

export default Download;
