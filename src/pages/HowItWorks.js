import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './HowItWorks.css';

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const steps = [
    {
      id: 1,
      title: 'Download the App',
      description: 'Download ZheyGo from App Store or Google Play and create your account.',
      details: 'It takes less than 2 minutes to set up your account and add your delivery address.',
      icon: '📱'
    },
    {
      id: 2,
      title: 'Browse Restaurants',
      description: 'Explore hundreds of restaurants with different cuisines and specialties.',
      details: 'Use filters and search to find exactly what you\'re craving.',
      icon: '🍽️'
    },
    {
      id: 3,
      title: 'Select Your Food',
      description: 'Browse menus, read reviews, and pick your favorite dishes.',
      details: 'Customize your order with special instructions if needed.',
      icon: '🍔'
    },
    {
      id: 4,
      title: 'Place Your Order',
      description: 'Review your order and choose your preferred payment method.',
      details: 'We accept cards, cash, and digital wallets.',
      icon: '🛒'
    },
    {
      id: 5,
      title: 'Track Delivery',
      description: 'Get real-time updates as your order is prepared and delivered.',
      details: 'See your delivery partner\'s location on the map.',
      icon: '📍'
    },
    {
      id: 6,
      title: 'Enjoy Your Meal',
      description: 'Receive your hot food and rate your experience.',
      details: 'Your feedback helps us improve and reward great restaurants.',
      icon: '😋'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How long does delivery take?',
      answer: 'Most orders are delivered within 30-45 minutes. Delivery time depends on restaurant location and current demand.'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, cash on delivery, and digital wallets including mBanking and other mobile payment apps.'
    },
    {
      id: 3,
      question: 'Can I cancel my order?',
      answer: 'You can cancel orders within 2 minutes of placing them. After that, please contact our support team.'
    },
    {
      id: 4,
      question: 'Is there a minimum order amount?',
      answer: 'No minimum order amount is required. However, orders below Nu. 200 may have a small delivery charge.'
    },
    {
      id: 5,
      question: 'How do I use promo codes?',
      answer: 'Enter the promo code during checkout. Make sure to check the terms and conditions for each code.'
    },
    {
      id: 6,
      question: 'What areas do you deliver to?',
      answer: 'We currently deliver across Thimphu and are expanding to other major cities. Check the app to see if we serve your area.'
    },
    {
      id: 7,
      question: 'What if my order is wrong or damaged?',
      answer: 'Contact us immediately through the app. We\'ll make it right with a replacement or refund.'
    },
    {
      id: 8,
      question: 'Do you offer discounts for bulk orders?',
      answer: 'Yes! We offer special discounts for large orders and corporate catering. Contact our support team for details.'
    }
  ];

  const features = [
    { emoji: '🔍', title: 'Smart Search', description: 'Find restaurants by cuisine, ratings, or delivery time' },
    { emoji: '⭐', title: 'Verified Reviews', description: 'Read authentic reviews from real customers' },
    { emoji: '💰', title: 'Great Deals', description: 'Daily discounts and exclusive offers' },
    { emoji: '🔔', title: 'Order Updates', description: 'Real-time notifications on your order status' }
  ];

  return (
    <div className="how-it-works">
      {/* Hero Section */}
      <section className="hiv-hero">
        <h1>How ZheyGo Works</h1>
        <p>Get delicious food delivered to your door in just 6 simple steps</p>
      </section>

      {/* Steps Timeline */}
      <section className="steps-timeline">
        <h2>The ZheyGo Journey</h2>
        <div className="timeline">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`timeline-item ${activeStep === step.id ? 'active' : ''}`}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
            >
              <div>
                <div className="timeline-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {activeStep === step.id && <div className="timeline-details">{step.details}</div>}
              </div>
              <div className="timeline-number">{step.id}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Customers Love ZheyGo</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.emoji}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
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
      <section className="hiv-cta">
        <h2>Ready to Get Started?</h2>
        <p>Download ZheyGo today and enjoy delicious food delivered fast</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">📱 Download Now</button>
          <button className="btn btn-secondary">📞 Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
