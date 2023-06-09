import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./Shops.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shops = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //data fetching:
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //get the data form local storage:
  useEffect(() => {
    //get stored shopping-cart:
    const storedCart = getShoppingCart();
    //new saved-cart:
    const savedCart = [];
    //step 1 get the product id from stored cart:
    for (const id in storedCart) {
      //step 2 find the product data from product state by using id:
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        //step 3 set the quantity value:
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //step 4 added the product with quantity:
        savedCart.push(addedProduct);
      }
    }
    //step 5 update the setCart:
    setCart(savedCart);
  }, [products]);

  //add to cart button handler:
  const addToCartHandler = (product) => {
    // let newCart = [...cart, product];

    //For quantity : cart is modified
    let newCart = [];

    //if the product is not exist in cart, then set the quantity = 1:
    //if exist then update the quantity:
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  const clearCartHandler = () => {
    setCart([]);
    deleteShoppingCart();
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
            <Cart cart={cart} clearCartHandler={clearCartHandler}>
              <Link to="/orders" className="link">
                <button type="button" className="btn">
                  <span>Review Orders</span>
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shops;
