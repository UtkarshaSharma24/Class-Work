import React from "react";

const About = () => {
  return (
    <>
      <style>{`
        .about-container {
          max-width: 1000px;
          margin: 3rem auto;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        .about-header h1 {
          font-size: 2.2rem;
          color: #282c34;
          margin-bottom: 1rem;
        }

        .about-header p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .about-sections {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 2rem;
          text-align: left;
        }

        .about-section {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          flex: 1;
          min-width: 280px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .about-section:hover {
          transform: translateY(-5px);
        }

        .about-section h2 {
          color: #61dafb;
          margin-bottom: 0.8rem;
        }

        .about-section p {
          color: #333;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .highlight {
          margin-top: 3rem;
          background: linear-gradient(135deg, #61dafb, #282c34);
          color: white;
          padding: 2rem;
          border-radius: 20px;
        }

        .highlight h2 {
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .about-sections {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div className="about-container">
        {/* 🏠 Header Section */}
        <div className="about-header">
          <h1>About MyApp</h1>
          <p>
            MyApp is a modern e-commerce platform built to provide a seamless
            and enjoyable shopping experience. We believe in quality, simplicity,
            and customer satisfaction.
          </p>
        </div>

        {/* 💡 Mission and Vision */}
        <div className="about-sections">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To make online shopping easy, reliable, and accessible for everyone.
              We aim to deliver quality products with excellent service and
              transparency.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Vision</h2>
            <p>
              To become a trusted brand that brings innovation and technology
              together for a smarter shopping experience worldwide.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us?</h2>
            <p>
              ✦ Best quality products  
              ✦ Affordable prices  
              ✦ 24/7 customer support  
              ✦ Fast and secure delivery
            </p>
          </div>
        </div>

        {/* ✨ Highlight Section */}
        <div className="highlight">
          <h2>We’re Growing Every Day 🚀</h2>
          <p>
            Join thousands of happy customers who trust MyApp for their everyday
            needs. Your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
