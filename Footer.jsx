
import React from 'react'

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background-color: #282c34;
          color: white;
          text-align: center;
          padding: 1.5rem 1rem;
          margin-top: 2rem;
        }
        .footer h3 {
          margin-bottom: 0.5rem;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 0.5rem;
        }
        .footer-links a {
          color: #61dafb;
          text-decoration: none;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
      `}</style>

      <footer className="footer">
        <h3>MyApp</h3>
        <p>© 2025 MyApp. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </>
  )
}

export default Footer
