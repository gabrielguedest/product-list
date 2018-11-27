import { GET_PRODUCTS, LOADING_PRODUCTS } from "../actions/types";

const initialState = {
  loading: false,
  products: [],
  pages: 1,
  currentPage: 1,
  results: 0,
  limit: 10
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.result,
        pages: action.payload.pages,
        currentPage: action.payload.currentPage,
        results: action.payload.results,
        limit: action.payload.limit,
        loading: false
      };
    case LOADING_PRODUCTS:
      return { ...state, loading: true };
    default:
      return state;
  }
}
