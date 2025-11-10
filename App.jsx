import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Cart from './Components/Cart'
import Products from './Components/Products'

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center' }}>404 - Page Not Found</h2>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App


