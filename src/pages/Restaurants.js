import React, { useState, useMemo } from 'react';
import { FaStar, FaSearch } from 'react-icons/fa';
import './Restaurants.css';

function Restaurants() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  const restaurants = useMemo(() => [
    { id: 1, name: 'Bhutanese Kitchen', cuisine: 'Bhutanese', rating: 4.8, reviews: 324, image: '🍛', deliveryTime: '30-40 min', minOrder: 150 },
    { id: 2, name: 'Dragon Momos', cuisine: 'Asian', rating: 4.9, reviews: 567, image: '🥟', deliveryTime: '25-35 min', minOrder: 100 },
    { id: 3, name: 'Thimphu Delights', cuisine: 'Fast Food', rating: 4.7, reviews: 412, image: '🍔', deliveryTime: '20-30 min', minOrder: 80 },
    { id: 4, name: 'Himalayan Spice', cuisine: 'Indian', rating: 4.6, reviews: 289, image: '🌶️', deliveryTime: '35-45 min', minOrder: 200 },
    { id: 5, name: 'Pizza Palace', cuisine: 'Italian', rating: 4.5, reviews: 198, image: '🍕', deliveryTime: '25-35 min', minOrder: 250 },
    { id: 6, name: 'Sushi Sensation', cuisine: 'Japanese', rating: 4.8, reviews: 156, image: '🍣', deliveryTime: '30-40 min', minOrder: 300 },
    { id: 7, name: 'Green Garden', cuisine: 'Vegetarian', rating: 4.7, reviews: 234, image: '🥗', deliveryTime: '20-30 min', minOrder: 100 },
    { id: 8, name: 'Dragon Bowl', cuisine: 'Asian', rating: 4.6, reviews: 178, image: '🍜', deliveryTime: '25-35 min', minOrder: 120 },
    { id: 9, name: 'Burger Barn', cuisine: 'Fast Food', rating: 4.4, reviews: 289, image: '🍔', deliveryTime: '15-25 min', minOrder: 60 },
    { id: 10, name: 'Tandoor House', cuisine: 'Indian', rating: 4.7, reviews: 401, image: '🍖', deliveryTime: '35-45 min', minOrder: 180 },
    { id: 11, name: 'Pasta Paradise', cuisine: 'Italian', rating: 4.6, reviews: 267, image: '🍝', deliveryTime: '30-40 min', minOrder: 200 },
    { id: 12, name: 'Pho Palace', cuisine: 'Vietnamese', rating: 4.8, reviews: 345, image: '🍲', deliveryTime: '25-35 min', minOrder: 110 }
  ], []);

  const cuisines = ['All', 'Bhutanese', 'Asian', 'Indian', 'Italian', 'Japanese', 'Fast Food', 'Vegetarian', 'Vietnamese'];

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(restaurant => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
      return matchesSearch && matchesCuisine;
    });
  }, [searchTerm, selectedCuisine, restaurants]);

  return (
    <div className="restaurants">
      {/* Hero Section */}
      <section className="restaurants-hero">
        <h1>Browse Restaurants</h1>
        <p>Discover your favorite food from the best restaurants</p>
      </section>

      {/* Search and Filter Section */}
      <section className="search-filter">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search restaurants or cuisines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="cuisine-filters">
          <h3>Filter by Cuisine:</h3>
          <div className="filter-buttons">
            {cuisines.map(cuisine => (
              <button
                key={cuisine}
                className={`filter-btn ${selectedCuisine === cuisine ? 'active' : ''}`}
                onClick={() => setSelectedCuisine(cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>

        <div className="results-info">
          <p>Showing {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}</p>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="restaurants-grid">
        {filteredRestaurants.length > 0 ? (
          <div className="grid">
            {filteredRestaurants.map(restaurant => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="restaurant-image">{restaurant.image}</div>
                <div className="card-content">
                  <h3>{restaurant.name}</h3>
                  <p className="cuisine-tag">{restaurant.cuisine}</p>
                  <div className="rating-section">
                    <div className="rating">
                      <FaStar className="star" />
                      <span className="rating-number">{restaurant.rating}</span>
                    </div>
                    <span className="reviews">({restaurant.reviews} reviews)</span>
                  </div>
                  <div className="details">
                    <span className="delivery-time">⏱️ {restaurant.deliveryTime}</span>
                    <span className="min-order">Min: Nu. {restaurant.minOrder}</span>
                  </div>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>😢 No restaurants found matching your search.</p>
            <p>Try adjusting your filters or search terms.</p>
          </div>
        )}
      </section>

      {/* Statistics Section */}
      <section className="restaurants-stats">
        <h2>ZheyGo Restaurant Network</h2>
        <div className="stats-grid">
          <div className="stat">
            <h3>200+</h3>
            <p>Partner Restaurants</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Cuisine Types</p>
          </div>
          <div className="stat">
            <h3>4.7★</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Delivery Hours</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Restaurants;
