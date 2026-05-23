import React from 'react';
import { Link } from 'react-router-dom';
import { FaApple, FaAndroid, FaStar, FaArrowRight } from 'react-icons/fa';
import './Home.css';

function Home() {
  const featuredRestaurants = [
    {
      id: 1,
      name: 'Bhutanese Kitchen',
      cuisine: 'Traditional Bhutanese',
      rating: 4.8,
      image: '🍛',
      deliveryTime: '30-40 min'
    },
    {
      id: 2,
      name: 'Dragon Momos',
      cuisine: 'Dumplings & Asian',
      rating: 4.9,
      image: '🥟',
      deliveryTime: '25-35 min'
    },
    {
      id: 3,
      name: 'Thimphu Delights',
      cuisine: 'Fast Food & Burgers',
      rating: 4.7,
      image: '🍔',
      deliveryTime: '20-30 min'
    },
    {
      id: 4,
      name: 'Himalayan Spice',
      cuisine: 'Indian & Fusion',
      rating: 4.6,
      image: '🌶️',
      deliveryTime: '35-45 min'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Download App',
      description: 'Get ZheyGo on iOS or Android',
      icon: '📱'
    },
    {
      number: 2,
      title: 'Browse Restaurants',
      description: 'Explore thousands of restaurants',
      icon: '🍽️'
    },
    {
      number: 3,
      title: 'Place Your Order',
      description: 'Easy ordering with secure payment',
      icon: '🛒'
    },
    {
      number: 4,
      title: 'Enjoy Delivery',
      description: 'Fast and reliable delivery to your door',
      icon: '🚚'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Food Delivery Made Easy</h1>
          <p>Order from your favorite restaurants and get delivery in minutes</p>
          <div className="hero-buttons">
            <Link to="/download" className="btn btn-primary">
              Download App <FaArrowRight />
            </Link>
            <Link to="/restaurants" className="btn btn-secondary">
              Browse Restaurants
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <span className="hero-emoji">🍜</span>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="promotions">
        <h2>Special Offers</h2>
        <div className="promo-grid">
          <div className="promo-card">
            <h3>🎉 50% Off</h3>
            <p>On your first order</p>
            <small>Use code: WELCOME50</small>
          </div>
          <div className="promo-card">
            <h3>🚚 Free Delivery</h3>
            <p>Orders above Nu. 300</p>
            <small>No minimum order required on app</small>
          </div>
          <div className="promo-card">
            <h3>⭐ Loyalty Points</h3>
            <p>Earn with every order</p>
            <small>Redeem for discounts</small>
          </div>
          <div className="promo-card">
            <h3>🌙 Late Night Eats</h3>
            <p>24/7 delivery available</p>
            <small>Order anytime, anywhere</small>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="featured-restaurants">
        <div className="section-header">
          <h2>Featured Restaurants</h2>
          <Link to="/restaurants" className="view-all">
            View All <FaArrowRight />
          </Link>
        </div>
        <div className="restaurants-grid">
          {featuredRestaurants.map(restaurant => (
            <div key={restaurant.id} className="restaurant-card">
              <div className="restaurant-image">{restaurant.image}</div>
              <h3>{restaurant.name}</h3>
              <p className="cuisine">{restaurant.cuisine}</p>
              <div className="rating">
                <FaStar className="star" />
                <span>{restaurant.rating}</span>
              </div>
              <p className="delivery-time">⏱️ {restaurant.deliveryTime}</p>
              <button className="order-btn">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How ZheyGo Works</h2>
        <div className="steps-container">
          {steps.map(step => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <Link to="/how-it-works" className="btn btn-primary">
          Learn More
        </Link>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Order?</h2>
        <p>Join thousands of satisfied customers enjoying delicious food delivered fast</p>
        <div className="cta-buttons">
          <a href="#download-app" className="btn btn-primary">
            <FaApple /> Download on iOS
          </a>
          <a href="#download-app" className="btn btn-primary">
            <FaAndroid /> Get on Android
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
