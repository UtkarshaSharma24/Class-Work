
import React, { useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product A', price: 25, quantity: 1 },
    { id: 2, name: 'Product B', price: 40, quantity: 2 },
  ])

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ))
  }

  const removeItem = (id) => setCart(cart.filter(item => item.id !== id))
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <style>{`
        .cart {
          padding: 2rem;
          text-align: center;
        }
        table {
          width: 80%;
          margin: 0 auto;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 0.75rem;
        }
        th {
          background-color: #007bff;
          color: white;
        }
        button {
          margin: 0 5px;
          padding: 5px 10px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
        }
        .remove {
          background-color: red;
          color: white;
        }
        .update {
          background-color: #007bff;
          color: white;
        }
      `}</style>

      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price ($)</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className="update" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      {item.quantity}
                      <button className="update" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </td>
                    <td>{item.price * item.quantity}</td>
                    <td><button className="remove" onClick={() => removeItem(item.id)}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Total: ${total}</h3>
          </>
        )}
      </div>
    </>
  )
}

export default Cart
