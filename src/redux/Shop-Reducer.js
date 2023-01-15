const GET_SHOP_CARDS = "GET_SHOP_CARDS";
const IS_LOADING = "IS_LOADING";

const initialState = {
  shopCards: [],
  loading: true,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOP_CARDS:
      return {
        ...state,
        shopCards: action.shopCards,
      };

    case IS_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }

    default:
      return state;
  }
};

export const getShopCards = (shopCards) => {
  return {
    type: GET_SHOP_CARDS,
    shopCards,
  };
};

export const setLoading = (loading) => {
  return {
    type: IS_LOADING,
    loading,
  };
};
