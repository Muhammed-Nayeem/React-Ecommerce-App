import React, { useEffect, useState } from "react";
import "./Shops.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shops = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //data fetching:
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //add to cart button handler:
  const addToCartHandler = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <section className="shops-area">
      <div className="container">
        <div className="shops-wrapper">
          <div className="products-container">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCartHandler={addToCartHandler}
              ></Product>
            ))}
          </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shops;
