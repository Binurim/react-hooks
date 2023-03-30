import { createStore } from "redux";

const initialData = {
  products: [
    { pName: "Apple", price: 20 },
    { pName: "Orange", price: 10 },
    { pName: "Banana", price: 3 },
    { pName: "Grapes", price: 8 },
  ],
  cart: [],
  total: 0,
};

const reducer = (state = initialData, action) => {
  console.log(action);
  if (action.type === "PURCHASE") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
      total: state.total + parseInt(action.payload.price),
    };
  }
  if (action.type === "DELETE") {
    return {
      ...state,
      cart: state.cart.filter((i, index)=>index !== action.payload.index),
      total: state.total - parseInt(action.payload.price),
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
