const SET_ORDERS = "SET_ORDERS";
const BASKET_SHOW = "BASKET_SHOW";
const CLOSE_BASKET_ALERT = "CLOSE_BASKET_ALERT";

const initialState = {
  orders: [],
  quantity: 0,
  basketShow: false,
  basketAlert: "",
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    case BASKET_SHOW:
      return {
        ...state,
        basketShow: action.basketShow,
      };
    case CLOSE_BASKET_ALERT:
      return {
        ...state,
        basketAlert: action.basketAlert,
      };

    default:
      return state;
  }
};

export const setOrders = (orders) => {
  return {
    type: SET_ORDERS,
    orders,
  };
};

export const basketShow = (basketShow) => {
  return {
    type: BASKET_SHOW,
    basketShow,
  };
};

export const showBasketAlert = (basketAlert) => {
  return {
    type: CLOSE_BASKET_ALERT,
    basketAlert,
  };
};
