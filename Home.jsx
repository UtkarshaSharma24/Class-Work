import React from 'react';
import Body from './Body'; // using the Body component

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MyApp</h1>
          <p>
            Discover amazing products at the best prices.  
            Shop smart, shop easy — only on MyApp.
          </p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      {/* Product Section */}
      <section className="products-section">
        <h2>Our Products</h2>
        <Body /> {/* Body will display product list and search */}
      </section>
    </div>
  );
};

export default Home;
