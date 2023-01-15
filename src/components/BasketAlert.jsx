import React from "react";
import { useEffect } from "react";

const BasketAlert = (props) => {
  const { name, closeAlert } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearInterval(timerId);
    };
  }, [name, closeAlert]);

  return (
    <div id="toast-container">
      <div className="toast">{name} added to cart</div>
    </div>
  );
};

export { BasketAlert };
