import React, { useMemo } from "react";
import { BasketItem } from "./BasketItem";

const BasketList = ({
  orders,
  handleBasketShow,
  removeFromBasket,
  decQuantity,
  incQuantity,
}) => {
  const totalPrice = useMemo(
    () =>
      orders.reduce((sum, elem) => {
        return sum + elem.price * elem.quantity;
      }, 0),
    [orders]
  );

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Cart</li>
      {orders.length ? (
        orders.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Cart is empty</li>
      )}
      <li className="collection-item active">Total count: {totalPrice} UAH</li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};

export { BasketList };
