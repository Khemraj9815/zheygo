import React from 'react';
import { FaApple, FaAndroid, FaCheckCircle } from 'react-icons/fa';
import './Download.css';

function Download() {
  const features = [
    'Fast and easy food ordering',
    'Real-time order tracking',
    'Exclusive app-only deals',
    'Save favorite restaurants',
    'Multiple payment options',
    'Customer support 24/7'
  ];

  return (
    <main className="download">
      {/* Hero Section */}
      <section className="hero">
        <h1>Download ZheyGo App</h1>
        <p>Order your favorite food anytime, anywhere</p>
      </section>

      {/* Main Download Section */}
      <section className="download-main">
        <div className="download-content">
          <h2>Get the App</h2>
          <p>Download ZheyGo and enjoy seamless food ordering experience with exclusive app features.</p>

          <div className="download-buttons">
            <a href="#" className="download-btn ios">
              <FaApple className="btn-icon" />
              <div className="btn-text">
                <span className="btn-label">Download on</span>
                <span className="btn-store">App Store</span>
              </div>
            </a>
            <a href="#" className="download-btn android">
              <FaAndroid className="btn-icon" />
              <div className="btn-text">
                <span className="btn-label">Get it on</span>
                <span className="btn-store">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div className="app-mockup">
          <span className="phone-emoji">📱</span>
        </div>
      </section>

      {/* App Features */}
      <section className="app-features-section">
        <h2>Why Download the App?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <FaCheckCircle className="check-icon" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* System Requirements */}
      <section className="requirements">
        <h2>System Requirements</h2>
        <div className="requirements-grid">
          <div className="requirement-card">
            <div className="requirement-icon">📱</div>
            <h3>iOS</h3>
            <p><strong>Version:</strong> iOS 12.0 or later</p>
            <p><strong>Compatibility:</strong> iPhone, iPad</p>
            <p><strong>Size:</strong> ~45 MB</p>
          </div>
          <div className="requirement-card">
            <div className="requirement-icon">🤖</div>
            <h3>Android</h3>
            <p><strong>Version:</strong> Android 6.0 or later</p>
            <p><strong>Compatibility:</strong> All Android devices</p>
            <p><strong>Size:</strong> ~50 MB</p>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="screenshots">
        <h2>App Preview</h2>
        <div className="screenshots-grid">
          <div className="screenshot-card">
            <span className="screenshot-icon">🏠</span>
            <h3>Home Screen</h3>
            <p>Browse restaurants and discover deals</p>
          </div>
          <div className="screenshot-card">
            <span className="screenshot-icon">🔍</span>
            <h3>Search & Filter</h3>
            <p>Find exactly what you're looking for</p>
          </div>
          <div className="screenshot-card">
            <span className="screenshot-icon">🛒</span>
            <h3>Easy Checkout</h3>
            <p>Quick and secure payment process</p>
          </div>
          <div className="screenshot-card">
            <span className="screenshot-icon">📍</span>
            <h3>Live Tracking</h3>
            <p>Track your order in real-time</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Download FAQs</h2>
        <div className="faq-grid">
          <div className="faq-card">
            <h3>Is the app free?</h3>
            <p>Yes, downloading and using the ZheyGo app is completely free. You only pay for your food orders.</p>
          </div>
          <div className="faq-card">
            <h3>What data does the app use?</h3>
            <p>The app requires internet connection for ordering. It uses minimal data and works efficiently on slow connections.</p>
          </div>
          <div className="faq-card">
            <h3>Is my payment information secure?</h3>
            <p>Yes, all payments are encrypted using industry-standard security protocols. Your information is safe with us.</p>
          </div>
          <div className="faq-card">
            <h3>Can I use the website instead?</h3>
            <p>Yes, you can also order through our website. The app provides additional features and exclusive deals.</p>
          </div>
          <div className="faq-card">
            <h3>How do I update the app?</h3>
            <p>Updates are automatically available in your app store. You can enable auto-update for the latest features.</p>
          </div>
          <div className="faq-card">
            <h3>What if I face issues?</h3>
            <p>Contact our support team through the app or website. We're available 24/7 to help you.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-final">
        <h2>Ready to Order?</h2>
        <p>Download the app now and get exclusive welcome bonus on your first order!</p>
        <div className="final-buttons">
          <a href="#" className="final-btn ios">
            <FaApple /> Download on iOS
          </a>
          <a href="#" className="final-btn android">
            <FaAndroid /> Download on Android
          </a>
        </div>
        <p className="bonus-text">Use code <strong>WELCOME30</strong> for 30% off on your first order!</p>
      </section>

      {/* Comparison Section */}
      <section className="comparison">
        <h2>App vs Website</h2>
        <div className="comparison-table">
          <div className="comparison-row">
            <div className="comparison-cell header">Feature</div>
            <div className="comparison-cell header">App</div>
            <div className="comparison-cell header">Website</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Fast Loading</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Easy Navigation</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Real-time Tracking</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">✓</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Push Notifications</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">-</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Exclusive Deals</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">-</div>
          </div>
          <div className="comparison-row">
            <div className="comparison-cell">Offline Access</div>
            <div className="comparison-cell">✓</div>
            <div className="comparison-cell">-</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Download;
