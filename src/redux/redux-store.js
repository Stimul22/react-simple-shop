import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { orderReducer } from "./order-reducer";
import { shopReducer } from "./Shop-Reducer";

const reducers = combineReducers({
  shop: shopReducer,
  orders: orderReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
