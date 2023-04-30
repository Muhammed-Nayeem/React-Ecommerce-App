import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings, category } = props.product;

  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt={category} />
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <br />
        <p>
          <small>Manufacturer: </small>
          {seller}
        </p>
        <p>
          <small>Ratings: </small>
          {ratings} stars
        </p>
      </div>
      <button type="button">
        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
