import React from "react";
import "./App.css";


const Header = () => {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="logo"
      />
      <h1>Amazon Webpage</h1>
      <ul className="nav-list">
        <li>Home</li>
        <li>Cart</li>
        <li>About</li>
      </ul>
    </div>
  );
};


const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        placeholder="Search for products, brands, and more..."
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
};


const Products = () => {
  const productList = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹2,499",
      image:
        "https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹3,999",
      image:
        "https://m.media-amazon.com/images/I/61gscZYmaoL._SX679_.jpg",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "₹1,799",
      image:
        "https://m.media-amazon.com/images/I/71k+JjGqf6L._SX679_.jpg",
    },
  ];

  return (
    <div className="products">
      {productList.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button className="buy-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};



const Body = () => {
  return (
    <div className="body">
      <Search />
      <div className="pro-container">
        <Products />
      </div>
    </div>
  );
};


const Footer = () => {
  return (
    <div className="footer">
      <p>© 2025 Amazon Clone. All rights reserved.</p>
    </div>
  );
};


const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
