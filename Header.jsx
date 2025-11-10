import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <style>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #282c34;
          color: white;
          padding: 1rem 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        .logo-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .logo-section img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }
        .nav-links a:hover {
          color: #61dafb;
        }
      `}</style>

      <header className="header">
        <div className="logo-section">
          <img src="https://via.placeholder.com/50" alt="logo" />
          <h1>MyApp</h1>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;





