import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import "./Orders.css";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const removeProductHandler = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCartHandler = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <section className="order-page">
      <div className="container">
        <div className="order-wrapper">
          <div className="order-products">
            {cart.map((product) => (
              <ReviewProduct
                key={product.id}
                product={product}
                removeProductHandler={removeProductHandler}
              />
            ))}
          </div>
          <div className="order-cart">
            <Cart cart={cart} clearCartHandler={clearCartHandler}>
              <Link to="/checkout" className="link">
                <button type="button" className="btn">
                  <span>Proceed Checkout</span>
                  <FontAwesomeIcon icon={faCreditCard} />
                </button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
