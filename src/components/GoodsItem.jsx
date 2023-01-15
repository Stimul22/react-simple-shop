import React from "react";

const GoodsItem = ({
  id,
  name,
  description,
  price,
  image,
  addToBasket = Function.prototype,
}) => {
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
        <div className="card-action">
          <button
            className="btn"
            onClick={() => addToBasket({ id, name, price })}
          >
            Buy
          </button>
          <span className="right" style={{ fontSize: "1.8rem" }}>
            {price} UAH
          </span>
        </div>
      </div>
    </div>
  );
};

export { GoodsItem };
