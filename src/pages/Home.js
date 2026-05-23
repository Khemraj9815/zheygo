import React from 'react';
import { Link } from 'react-router-dom';
import { FaApple, FaAndroid, FaArrowRight, FaStar } from 'react-icons/fa';
import './Home.css';

function Home() {
  const featuredRestaurants = [
    {
      id: 1,
      name: 'Dragon Khebab',
      cuisine: 'Bhutanese',
      image: '🍛',
      rating: 4.8,
      reviews: 245,
      featured: true
    },
    {
      id: 2,
      name: 'Thimphu Momos',
      cuisine: 'Tibetan',
      image: '🥟',
      rating: 4.7,
      reviews: 189,
      featured: true
    },
    {
      id: 3,
      name: 'Pizza House',
      cuisine: 'Italian',
      image: '🍕',
      rating: 4.6,
      reviews: 312,
      featured: true
    },
    {
      id: 4,
      name: 'Spice Garden',
      cuisine: 'Indian',
      image: '🍲',
      rating: 4.9,
      reviews: 428,
      featured: true
    }
  ];

  const promotions = [
    { id: 1, title: 'New User Offer', description: '30% OFF on your first order', code: 'WELCOME30' },
    { id: 2, title: 'Weekend Deal', description: 'Free delivery on all orders above Nu. 300', code: 'FREE-DELIVERY' },
    { id: 3, title: 'Lunch Special', description: 'Buy 1 Get 1 Free on selected items', code: 'LUNCH-BOGO' }
  ];

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fast Food Delivery in Bhutan</h1>
          <p>Order from your favorite restaurants and get delivery in minutes</p>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search restaurants, cuisines, or dishes..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
        </div>
        <div className="hero-image">
          <span className="hero-emoji">🚚</span>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="promotions">
        <h2>Current Promotions</h2>
        <div className="promotions-grid">
          {promotions.map(promo => (
            <div key={promo.id} className="promo-card">
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
              <div className="promo-code">
                <strong>Code:</strong> <span>{promo.code}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Restaurants Section */}
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
                <FaStar className="star-icon" />
                <span>{restaurant.rating}</span>
                <span className="reviews">({restaurant.reviews} reviews)</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="how-it-works-preview">
        <h2>How ZheyGo Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose Restaurant</h3>
            <p>Browse through hundreds of restaurants</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Place Your Order</h3>
            <p>Add items to cart and checkout</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Fast Delivery</h3>
            <p>Get your food delivered quickly</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Enjoy Your Meal</h3>
            <p>Rate and review your experience</p>
          </div>
        </div>
        <Link to="/how-it-works" className="learn-more-btn">
          Learn More
        </Link>
      </section>

      {/* Call to Action - Download App */}
      <section className="cta-download">
        <div className="cta-content">
          <h2>Get ZheyGo App</h2>
          <p>Download our mobile app for a seamless ordering experience</p>
          <div className="download-buttons">
            <button className="download-btn ios">
              <FaApple /> Download for iOS
            </button>
            <button className="download-btn android">
              <FaAndroid /> Download for Android
            </button>
          </div>
        </div>
        <div className="cta-image">
          <span>📱</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose ZheyGo?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery service</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h3>Great Deals</h3>
            <p>Exclusive offers and promotions</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h3>Secure Payment</h3>
            <p>Safe and secure payment options</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⭐</span>
            <h3>Quality Assured</h3>
            <p>Verified restaurants and quality food</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
