import axios from "axios";

import { GET_PRODUCTS, LOADING_PRODUCTS } from "./types";

export const getProducts = data => dispatch => {
  let baseURL = "http://localhost:5000";

  if (process.env.NODE_ENV === "production") {
    baseURL = "https://stormy-plains-51662.herokuapp.com";
  }

  dispatch(setLoadingProducts());

  axios
    .get(`${baseURL}/api/products`, {
      params: {
        query: data.query,
        limit: data.limit,
        page: data.page
      }
    })
    .then(response => dispatch({ type: GET_PRODUCTS, payload: response.data }))
    .catch(err => dispatch({ type: GET_PRODUCTS, payload: [] }));
};

export const setLoadingProducts = () => {
  return {
    type: LOADING_PRODUCTS
  };
};
