import React from "react";

const Cart = ({ quantity, handleBasketShow }) => {
  return (
    <div className="cart cyan lighten-3" onClick={handleBasketShow}>
      <i className="small material-icons">shopping_basket</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export { Cart };
