import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const reduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case "MY_ACTION":
      return { ...state, name: payload };

    case "GET_POKEMON":
      return { ...payload };

    default:
      return state;
  }
};

const store = createStore(reduser, composeWithDevTools());

export default store;
