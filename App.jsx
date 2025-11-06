import React, { useState } from 'react'

// Header component
function Header() {
  return (
    <header style={{ padding: '1rem', background: '#282c34', color: 'white' }}>
      <h1 style={{ margin: 0 }}>Product Search App</h1>
    </header>
  )
}

// Search component
function Search({ value, onChange }) {
  return (
    <div style={{ padding: '0.75rem' }}>
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          padding: '0.5rem',
          width: '100%',
          boxSizing: 'border-box',
          border: '1px solid #ccc',
          borderRadius: 4
        }}
      />
    </div>
  )
}

// Products component
function Products({ items }) {
  if (!items || items.length === 0)
    return <p style={{ padding: '0.75rem' }}>No products found</p>

  return (
    <ul style={{ listStyle: 'none', padding: '0 0.75rem' }}>
      {items.map((p, idx) => (
        <li
          key={idx}
          style={{
            padding: '0.5rem 0',
            borderBottom: '1px solid #eee',
            fontSize: '1rem'
          }}
        >
          {p}
        </li>
      ))}
    </ul>
  )
}

// Footer component
function Footer() {
  return (
    <footer
      style={{
        padding: '0.75rem',
        textAlign: 'center',
        color: '#666',
        background: '#f9f9f9'
      }}
    >
      © 2025 My Product App
    </footer>
  )
}

// Main App component
function App() {
  const allProducts = [
    'Product A',
    'Product B',
    'Product C',
    'Sample Item',
    'Another Product',
    'Product X',
    'Super Item',
    'Cool Gadget'
  ]
  const [query, setQuery] = useState('')

  const filtered = allProducts.filter(p =>
    p.toLowerCase().includes(query.trim().toLowerCase())
  )

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        maxWidth: 720,
        margin: '1.5rem auto',
        border: '1px solid #ddd',
        borderRadius: 6,
        overflow: 'hidden',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}
    >
      <Header />
      <Search value={query} onChange={setQuery} />
      <Products items={filtered} />
      <Footer />
    </div>
  )
}

export default App
