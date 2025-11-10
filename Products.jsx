import React from 'react'

const Products = () => {
  const products = [
    { id: 1, name: 'Product A', price: '$25', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product B', price: '$40', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product C', price: '$15', image: 'https://via.placeholder.com/150' },
  ]

  return (
    <>
      <style>{`
        .products {
          padding: 2rem;
          text-align: center;
        }
        .product-grid {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .product-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          width: 200px;
          padding: 1rem;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .product-card img {
          width: 100%;
          border-radius: 10px;
        }
        .product-card h3 {
          margin: 0.5rem 0;
        }
        .product-card button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
        }
        .product-card button:hover {
          background-color: #0056b3;
        }
      `}</style>

      <div className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products


