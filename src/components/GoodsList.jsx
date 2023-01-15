import React from "react";
import { useSelector } from "react-redux";
import { GoodsItem } from "./GoodsItem";

const GoodsList = (props) => {
  const goods = useSelector((state) => state.shop.shopCards);

  if (!goods.length) {
    <h3>There is nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={props.addToBasket}/>
      ))}
    </div>
  );
};

export { GoodsList };
