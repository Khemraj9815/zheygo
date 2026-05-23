import React from 'react';
import { FaGraduationCap, FaHeart, FaLeaf, FaUsers, FaTruck } from 'react-icons/fa';
import './About.css';

function About() {
  const team = [
    { id: 1, name: 'Dorji Wangchuk', role: 'Founder & CEO', emoji: '👨‍💼' },
    { id: 2, name: 'Tenzin Pelmo', role: 'Co-founder & CTO', emoji: '👩‍💻' },
    { id: 3, name: 'Karma Tobgay', role: 'Operations Manager', emoji: '👨‍🎓' }
  ];

  const stats = [
    { label: 'Restaurants', value: '200+' },
    { label: 'Active Customers', value: '10,000+' },
    { label: 'Deliveries', value: '50,000+' },
    { label: 'Average Rating', value: '4.8/5' }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About ZheyGo</h1>
        <p>Revolutionizing Food Delivery in Bhutan</p>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <h2>Our Story</h2>
        <div className="story-content">
          <div className="story-text">
            <p>
              ZheyGo was founded in 2023 with a simple mission: to make food delivery fast, reliable, and accessible to everyone in Bhutan. We realized that traditional food ordering methods were slow and inefficient, so we built a modern solution.
            </p>
            <p>
              Our team of dedicated professionals works tirelessly to connect hungry customers with their favorite restaurants. We've grown from a small startup to serving thousands of customers across Bhutan.
            </p>
            <p>
              Today, ZheyGo is the most popular food delivery platform in Bhutan, trusted by thousands of customers and partnered with hundreds of restaurants.
            </p>
          </div>
          <div className="story-image">📖</div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mission-vision">
        <div className="mission-card">
          <FaGraduationCap className="icon" />
          <h3>Our Mission</h3>
          <p>To make food delivery fast, reliable, and accessible to everyone in Bhutan.</p>
        </div>
        <div className="mission-card">
          <FaHeart className="icon" />
          <h3>Our Vision</h3>
          <p>To be the most trusted and preferred food delivery platform in Bhutan.</p>
        </div>
        <div className="mission-card">
          <FaLeaf className="icon" />
          <h3>Our Values</h3>
          <p>Customer-first, integrity, innovation, and sustainability guide everything we do.</p>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-emoji">🍽️</span>
            <h3>Wide Selection</h3>
            <p>Browse from 200+ restaurants with diverse cuisines and options.</p>
          </div>
          <div className="service-card">
            <span className="service-emoji">⚡</span>
            <h3>Fast Delivery</h3>
            <p>Average delivery time of 30-45 minutes with real-time tracking.</p>
          </div>
          <div className="service-card">
            <span className="service-emoji">💳</span>
            <h3>Secure Payment</h3>
            <p>Multiple payment options including cash, card, and digital wallets.</p>
          </div>
          <div className="service-card">
            <span className="service-emoji">🏆</span>
            <h3>Quality Assurance</h3>
            <p>All restaurants and delivery partners meet our quality standards.</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <h2>By The Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Our Leadership Team</h2>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-member">
              <div className="member-avatar">{member.emoji}</div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose ZheyGo */}
      <section className="why-choose">
        <h2>Why Choose ZheyGo?</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <span className="reason-number">1</span>
            <h3>Fastest Delivery</h3>
            <p>We deliver your food hot and fresh in record time.</p>
          </div>
          <div className="reason-card">
            <span className="reason-number">2</span>
            <h3>Best Prices</h3>
            <p>Regular discounts and promotions for our loyal customers.</p>
          </div>
          <div className="reason-card">
            <span className="reason-number">3</span>
            <h3>Safe & Reliable</h3>
            <p>Verified restaurants and professional delivery partners.</p>
          </div>
          <div className="reason-card">
            <span className="reason-number">4</span>
            <h3>Easy to Use</h3>
            <p>Intuitive app design that anyone can master in minutes.</p>
          </div>
          <div className="reason-card">
            <span className="reason-number">5</span>
            <h3>24/7 Support</h3>
            <p>Always here to help with any questions or issues.</p>
          </div>
          <div className="reason-card">
            <span className="reason-number">6</span>
            <h3>Local First</h3>
            <p>Supporting Bhutanese restaurants and businesses.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
