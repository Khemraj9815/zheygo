import React from 'react';
import './About.css';

function About() {
  return (
    <main className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About ZheyGo Bhutan</h1>
        <p>Delivering convenience, one meal at a time</p>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="overview-content">
          <h2>Our Story</h2>
          <p>
            ZheyGo Bhutan is a digital service provider in the field of food delivery. 
            We cooperate with local restaurants and offer reliable delivery services to our clients 
            in major cities like Thimphu. Founded with a mission to make food ordering convenient 
            and accessible to everyone, ZheyGo has become a significant player in Bhutan's developing 
            e-commerce sector.
          </p>
          <p>
            The main service offered by ZheyGo is food ordering through our user-friendly mobile application 
            and web platform. Our service has gained immense popularity among students and working professionals 
            who seek quick and convenient ways to order their favorite meals.
          </p>
        </div>
        <div className="overview-image">
          <span>🏪</span>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>
            To make food ordering fast, convenient, and accessible to everyone in Bhutan by connecting 
            customers with their favorite local restaurants through innovative digital platforms.
          </p>
        </div>
        <div className="vision-card">
          <h3>Our Vision</h3>
          <p>
            To become the leading food delivery platform in Bhutan, revolutionizing the way people order 
            and enjoy their meals through technology and excellent customer service.
          </p>
        </div>
        <div className="values-card">
          <h3>Our Values</h3>
          <ul>
            <li>Customer First</li>
            <li>Speed & Reliability</li>
            <li>Local Community Support</li>
            <li>Innovation & Excellence</li>
            <li>Transparency & Trust</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <span className="service-icon">📱</span>
            <h3>Mobile App Ordering</h3>
            <p>Order your favorite food through our easy-to-use mobile application available on iOS and Android.</p>
          </div>
          <div className="service-item">
            <span className="service-icon">🌐</span>
            <h3>Web Platform</h3>
            <p>Browse restaurants and place orders directly from our responsive web platform.</p>
          </div>
          <div className="service-item">
            <span className="service-icon">🚚</span>
            <h3>Fast Delivery</h3>
            <p>Our efficient delivery network ensures your food arrives hot and fresh at your doorstep.</p>
          </div>
          <div className="service-item">
            <span className="service-icon">💳</span>
            <h3>Secure Payment</h3>
            <p>Multiple safe payment options to make your ordering experience hassle-free.</p>
          </div>
          <div className="service-item">
            <span className="service-icon">🍽️</span>
            <h3>Restaurant Partnership</h3>
            <p>We partner with local restaurants to bring you a wide variety of cuisines.</p>
          </div>
          <div className="service-item">
            <span className="service-icon">⭐</span>
            <h3>Quality Assurance</h3>
            <p>Every order is monitored for quality and customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose ZheyGo?</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <div className="reason-number">1</div>
            <h4>Convenience</h4>
            <p>Order anytime, anywhere through our mobile app or website</p>
          </div>
          <div className="reason-card">
            <div className="reason-number">2</div>
            <h4>Speed</h4>
            <p>Quick delivery from your favorite local restaurants</p>
          </div>
          <div className="reason-card">
            <div className="reason-number">3</div>
            <h4>Variety</h4>
            <p>Wide selection of restaurants and cuisines to choose from</p>
          </div>
          <div className="reason-card">
            <div className="reason-number">4</div>
            <h4>Deals & Offers</h4>
            <p>Exclusive promotions and discounts for our customers</p>
          </div>
          <div className="reason-card">
            <div className="reason-number">5</div>
            <h4>Reliability</h4>
            <p>Trustworthy service with track record of customer satisfaction</p>
          </div>
          <div className="reason-card">
            <div className="reason-number">6</div>
            <h4>Local Support</h4>
            <p>Supporting local restaurants and businesses in Bhutan</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <h2>By The Numbers</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>50+</h3>
            <p>Partner Restaurants</p>
          </div>
          <div className="stat-card">
            <h3>10,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card">
            <h3>30,000+</h3>
            <p>Orders Delivered</p>
          </div>
          <div className="stat-card">
            <h3>4.7/5</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Our Team</h2>
        <p className="team-intro">ZheyGo is built by a passionate team dedicated to revolutionizing food delivery in Bhutan.</p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍💼</div>
            <h4>Founder & CEO</h4>
            <p>Leading the vision for innovative food delivery solutions</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍💻</div>
            <h4>CTO</h4>
            <p>Developing cutting-edge technology platforms</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👨‍🍳</div>
            <h4>Operations Manager</h4>
            <p>Ensuring quality delivery and customer satisfaction</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍💼</div>
            <h4>Marketing Director</h4>
            <p>Building brand awareness and customer relationships</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
