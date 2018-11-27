import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  products: productsReducer,
  errors: errorsReducer
});
