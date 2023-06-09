import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./ReviewProduct.css";

const ReviewProduct = ({ product, removeProductHandler }) => {
  const { id, img, name, price, quantity } = product;

  return (
    <div className="review-product">
      <div className="review-product-img">
        <img src={img} alt={name} />
      </div>
      <div className="review-product-details">
        <h6>{name}</h6>
        <p>Price: <span>${price}</span></p>
        <p>Order-Quantity: <span>{quantity}</span></p>
      </div>
      <button type="button" className="delete-btn" onClick={() => removeProductHandler(id)}>
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewProduct;
