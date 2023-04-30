import React, { useEffect, useState } from "react";
import "./Shops.css";
import Product from "../Product/Product";

const Shops = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="shops-area">
      <div className="container">
        <div className="shops-wrapper">
          <div className="products-container">
            {products.map((product) => (
              <Product product={product} key={product.id}></Product>
            ))}
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
