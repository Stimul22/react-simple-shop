import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopAPI } from "../api";
import { basketShow, setOrders, showBasketAlert } from "../redux/order-reducer";
import { getShopCards, setLoading } from "../redux/Shop-Reducer";
import { BasketAlert } from "./BasketAlert";
import { BasketList } from "./BasketList";
import { Cart } from "./Cart";
import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";

const Shop = () => {
  const goods = useSelector((state) => state.shop.shopCards);
  const loading = useSelector((state) => state.shop.loading);
  const orders = useSelector((state) => state.orders.orders);
  const isBasketShow = useSelector((state) => state.orders.basketShow);
  const basketAlert = useSelector((state) => state.orders.basketAlert);

  const dispatch = useDispatch();

  const addToBasket = (item) => {
    const itemIndex = orders.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      dispatch(setOrders([...orders, newItem]));
    } else {
      const newOrder = orders.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      dispatch(setOrders(newOrder));
    }
    dispatch(showBasketAlert(item.name));
  };

  const handleBasketShow = () => {
    dispatch(basketShow(!isBasketShow));
  };

  const closeAlert = () => {
    dispatch(showBasketAlert(""));
  };
  const removeFromBasket = (itemId) => {
    const newOrder = orders.filter((elem) => elem.id !== itemId);
    dispatch(setOrders(newOrder));
  };

  const incQuantity = (itemId) => {
    const newOrder = orders.map((elem) => {
      if (elem.id === itemId) {
        const newQuantity = elem.quantity + 1;
        return {
          ...elem,
          quantity: newQuantity,
        };
      } else {
        return elem;
      }
    });
    dispatch(setOrders(newOrder));
  };
  const decQuantity = (itemId) => {
    const newOrder = orders.map((elem) => {
      if (elem.id === itemId) {
        const newQuantity = elem.quantity - 1;
        return {
          ...elem,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return elem;
      }
    });
    dispatch(setOrders(newOrder));
  };

  useEffect(function getGoods() {
    shopAPI.getShop().then((data) => {
      data && dispatch(getShopCards(data));
      dispatch(setLoading(false));
    });
  }, [dispatch]);

  return (
    <main className="container content">
      {<Cart quantity={orders.length} handleBasketShow={handleBasketShow} />}
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          orders={orders}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {basketAlert && (
        <BasketAlert name={basketAlert} closeAlert={closeAlert} />
      )}
    </main>
  );
};

export { Shop };
