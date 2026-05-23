import React, { useState } from 'react';
import { FaStar, FaFilter, FaTimes } from 'react-icons/fa';
import './Restaurants.css';

function Restaurants() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const restaurants = [
    {
      id: 1,
      name: 'Dragon Khebab',
      cuisine: 'Bhutanese',
      image: '🍛',
      rating: 4.8,
      reviews: 245,
      delivery: '35-45 min',
      deliveryFee: 'Nu. 50',
      minOrder: 'Nu. 200'
    },
    {
      id: 2,
      name: 'Thimphu Momos',
      cuisine: 'Tibetan',
      image: '🥟',
      rating: 4.7,
      reviews: 189,
      delivery: '30-40 min',
      deliveryFee: 'Nu. 40',
      minOrder: 'Nu. 150'
    },
    {
      id: 3,
      name: 'Pizza House',
      cuisine: 'Italian',
      image: '🍕',
      rating: 4.6,
      reviews: 312,
      delivery: '25-35 min',
      deliveryFee: 'Nu. 60',
      minOrder: 'Nu. 250'
    },
    {
      id: 4,
      name: 'Spice Garden',
      cuisine: 'Indian',
      image: '🍲',
      rating: 4.9,
      reviews: 428,
      delivery: '35-50 min',
      deliveryFee: 'Nu. 50',
      minOrder: 'Nu. 180'
    },
    {
      id: 5,
      name: 'Burger Barn',
      cuisine: 'American',
      image: '🍔',
      rating: 4.5,
      reviews: 156,
      delivery: '20-30 min',
      deliveryFee: 'Nu. 40',
      minOrder: 'Nu. 120'
    },
    {
      id: 6,
      name: 'Sushi Dreams',
      cuisine: 'Japanese',
      image: '🍣',
      rating: 4.8,
      reviews: 203,
      delivery: '40-50 min',
      deliveryFee: 'Nu. 70',
      minOrder: 'Nu. 300'
    },
    {
      id: 7,
      name: 'Taco Fiesta',
      cuisine: 'Mexican',
      image: '🌮',
      rating: 4.6,
      reviews: 134,
      delivery: '25-40 min',
      deliveryFee: 'Nu. 45',
      minOrder: 'Nu. 160'
    },
    {
      id: 8,
      name: 'Noodle Express',
      cuisine: 'Chinese',
      image: '🍜',
      rating: 4.7,
      reviews: 267,
      delivery: '30-40 min',
      deliveryFee: 'Nu. 50',
      minOrder: 'Nu. 140'
    },
    {
      id: 9,
      name: 'Greek Taverna',
      cuisine: 'Greek',
      image: '🥙',
      rating: 4.5,
      reviews: 98,
      delivery: '35-45 min',
      deliveryFee: 'Nu. 55',
      minOrder: 'Nu. 170'
    },
    {
      id: 10,
      name: 'Sweet Bites',
      cuisine: 'Desserts',
      image: '🍰',
      rating: 4.9,
      reviews: 341,
      delivery: '15-25 min',
      deliveryFee: 'Nu. 30',
      minOrder: 'Nu. 100'
    },
    {
      id: 11,
      name: 'Coffee House',
      cuisine: 'Cafe',
      image: '☕',
      rating: 4.7,
      reviews: 256,
      delivery: '10-20 min',
      deliveryFee: 'Nu. 20',
      minOrder: 'Nu. 80'
    },
    {
      id: 12,
      name: 'Biryani Palace',
      cuisine: 'Indian',
      image: '🍚',
      rating: 4.8,
      reviews: 378,
      delivery: '35-45 min',
      deliveryFee: 'Nu. 50',
      minOrder: 'Nu. 200'
    }
  ];

  const cuisines = ['All', 'Bhutanese', 'Indian', 'Chinese', 'Italian', 'Japanese', 'Mexican', 'American', 'Desserts', 'Cafe'];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesCuisine = filter === 'all' || restaurant.cuisine === filter;
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  return (
    <main className="restaurants">
      {/* Hero Section */}
      <section className="hero">
        <h1>All Restaurants</h1>
        <p>Browse and order from our partner restaurants</p>
      </section>

      {/* Search and Filter Section */}
      <section className="search-filter-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search restaurants or cuisines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-section">
          <div className="filter-header">
            <FaFilter className="filter-icon" />
            <span>Cuisines</span>
          </div>
          <div className="cuisine-filters">
            {cuisines.map(cuisine => (
              <button
                key={cuisine}
                className={`filter-btn ${filter === (cuisine === 'All' ? 'all' : cuisine) ? 'active' : ''}`}
                onClick={() => setFilter(cuisine === 'All' ? 'all' : cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="restaurants-list">
        <div className="results-header">
          <h2>Showing {filteredRestaurants.length} restaurants</h2>
        </div>

        {filteredRestaurants.length > 0 ? (
          <div className="restaurants-grid">
            {filteredRestaurants.map(restaurant => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="restaurant-header">
                  <div className="restaurant-image">{restaurant.image}</div>
                  <div className="restaurant-badge">
                    <span className="badge-text">Popular</span>
                  </div>
                </div>

                <div className="restaurant-info">
                  <h3>{restaurant.name}</h3>
                  <p className="cuisine">{restaurant.cuisine}</p>

                  <div className="restaurant-meta">
                    <div className="rating">
                      <FaStar className="star" />
                      <span className="rating-value">{restaurant.rating}</span>
                      <span className="reviews">({restaurant.reviews})</span>
                    </div>
                  </div>

                  <div className="restaurant-details">
                    <div className="detail">
                      <span className="label">Delivery:</span>
                      <span className="value">{restaurant.delivery}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Fee:</span>
                      <span className="value">{restaurant.deliveryFee}</span>
                    </div>
                    <div className="detail">
                      <span className="label">Min Order:</span>
                      <span className="value">{restaurant.minOrder}</span>
                    </div>
                  </div>

                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No restaurants found matching your search.</p>
            <button onClick={() => { setSearchTerm(''); setFilter('all'); }} className="reset-btn">
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="restaurants-cta">
        <h2>Can't find what you're looking for?</h2>
        <p>Download our mobile app for more restaurants and exclusive deals</p>
        <div className="cta-buttons">
          <button className="cta-btn">Download App</button>
          <button className="cta-btn secondary">Contact Support</button>
        </div>
      </section>
    </main>
  );
}

export default Restaurants;
