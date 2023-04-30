import React, { useEffect, useState } from 'react';
import "./Shops.css";

const Shops = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <section className="shops-area">
      <div className="container">
        <div className="shops-wrapper">
          <div className="products-container">
            <h3>Products Coming Here: {products.length}</h3>
          </div>
          <div className="cart-container">
            <h3>Order Summary</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shops;
