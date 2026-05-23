import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Download the App',
      description: 'Download ZheyGo from App Store or Google Play Store',
      icon: '📱'
    },
    {
      id: 2,
      title: 'Create an Account',
      description: 'Sign up with your email or phone number',
      icon: '👤'
    },
    {
      id: 3,
      title: 'Choose Location',
      description: 'Select your delivery location',
      icon: '📍'
    },
    {
      id: 4,
      title: 'Browse Restaurants',
      description: 'Explore restaurants and cuisines available in your area',
      icon: '🍽️'
    },
    {
      id: 5,
      title: 'Select Items',
      description: 'Browse menus and add your favorite items to cart',
      icon: '🛒'
    },
    {
      id: 6,
      title: 'Review & Checkout',
      description: 'Review your order and proceed to payment',
      icon: '✓'
    },
    {
      id: 7,
      title: 'Choose Payment',
      description: 'Select your preferred payment method',
      icon: '💳'
    },
    {
      id: 8,
      title: 'Track Order',
      description: 'Track your delivery in real-time',
      icon: '🚚'
    },
    {
      id: 9,
      title: 'Enjoy Your Meal',
      description: 'Receive your food and enjoy!',
      icon: '😋'
    }
  ];

  const faqs = [
    {
      question: 'How long does delivery take?',
      answer: 'Delivery time typically ranges from 30-45 minutes depending on restaurant and location. You can see estimated delivery time before checkout.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, debit cards, mobile money, and cash on delivery (where available).'
    },
    {
      question: 'Can I schedule orders for later?',
      answer: 'Yes, you can schedule your order for a future time up to 7 days in advance.'
    },
    {
      question: 'What if my order is incorrect or delayed?',
      answer: 'Contact our customer support team immediately. We will resolve the issue and provide appropriate compensation.'
    },
    {
      question: 'Are there any delivery charges?',
      answer: 'Delivery charges depend on distance and restaurant. Some promotions may include free delivery.'
    },
    {
      question: 'Can I modify my order after placing it?',
      answer: 'You can modify your order within 2 minutes of placing it. After that, contact support for assistance.'
    }
  ];

  return (
    <main className="how-it-works">
      {/* Hero Section */}
      <section className="hero">
        <h1>How ZheyGo Works</h1>
        <p>Simple steps to get your favorite food delivered</p>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <h2>9 Easy Steps</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step-card">
              <div className="step-circle">
                <span className="step-icon">{step.icon}</span>
                <span className="step-number">{step.id}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="timeline-section">
        <h2>Order Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-icon">📱</span>
            </div>
            <div className="timeline-content">
              <h3>Place Order</h3>
              <p>Browse restaurants and select your favorite items</p>
              <span className="timeline-time">0 min</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-icon">✓</span>
            </div>
            <div className="timeline-content">
              <h3>Order Confirmed</h3>
              <p>Your order is confirmed and sent to restaurant</p>
              <span className="timeline-time">1-2 min</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-icon">👨‍🍳</span>
            </div>
            <div className="timeline-content">
              <h3>Restaurant Preparing</h3>
              <p>Your food is being prepared with care</p>
              <span className="timeline-time">10-20 min</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-icon">🚚</span>
            </div>
            <div className="timeline-content">
              <h3>Out for Delivery</h3>
              <p>Your order is on the way to you</p>
              <span className="timeline-time">20-30 min</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-icon">🎉</span>
            </div>
            <div className="timeline-content">
              <h3>Delivered</h3>
              <p>Your food has arrived! Enjoy your meal</p>
              <span className="timeline-time">40-50 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="app-features">
        <h2>App Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-emoji">🔍</span>
            <h3>Smart Search</h3>
            <p>Find restaurants by cuisine, dish, or rating</p>
          </div>
          <div className="feature-card">
            <span className="feature-emoji">⭐</span>
            <h3>Reviews & Ratings</h3>
            <p>Read customer reviews and ratings for restaurants</p>
          </div>
          <div className="feature-card">
            <span className="feature-emoji">❤️</span>
            <h3>Save Favorites</h3>
            <p>Bookmark your favorite restaurants and dishes</p>
          </div>
          <div className="feature-card">
            <span className="feature-emoji">🎁</span>
            <h3>Exclusive Offers</h3>
            <p>Get access to deals and promotions</p>
          </div>
          <div className="feature-card">
            <span className="feature-emoji">📍</span>
            <h3>Real-time Tracking</h3>
            <p>Track your delivery in real-time on map</p>
          </div>
          <div className="feature-card">
            <span className="feature-emoji">💬</span>
            <h3>24/7 Support</h3>
            <p>Chat with our support team anytime</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <h2>Tips for Best Experience</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-number">1</span>
            <h3>Complete Your Profile</h3>
            <p>Add all your delivery addresses and payment methods for faster checkout</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">2</span>
            <h3>Check Special Offers</h3>
            <p>Look for promotions and discount codes before placing your order</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">3</span>
            <h3>Read Reviews</h3>
            <p>Check restaurant and dish reviews to make the best choice</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">4</span>
            <h3>Track Your Order</h3>
            <p>Keep track of your order status for better planning</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">5</span>
            <h3>Rate Your Experience</h3>
            <p>Leave reviews and ratings to help other users and restaurants</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">6</span>
            <h3>Contact Support</h3>
            <p>Reach out to support for any issues or feedback</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HowItWorks;
