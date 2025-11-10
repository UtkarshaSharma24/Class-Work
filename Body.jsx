
import React from "react";

const Body = () => {
  return (
    <>
      <style>{`
        .body {
          text-align: center;
          padding: 2rem;
        }
        .products-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
      `}</style>

      <div className="body">
        <h2>Featured Products</h2>
        <div className="products-container"></div>
      </div>
    </>
  );
};

export default Body;
