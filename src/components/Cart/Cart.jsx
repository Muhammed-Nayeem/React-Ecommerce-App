import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // const cart = props.cart; //option: 01
  const { cart } = props; //option: 02

  //total price, shipping charges, taxes calculation:
  let totalPrice = 0;
  let totalShippingCharges = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    // if (product.id === 0) {
    //   product.id = 1;
    // }
    // product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    totalShippingCharges = totalShippingCharges + product.shipping * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  //total tax calculation:
  let totalTax = (totalPrice * 7) / 100;

  //Grand Total Price:
  const grandTotal = totalPrice + totalShippingCharges + totalTax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charges: ${totalShippingCharges}</p>
      <p>Tax: ${totalTax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
