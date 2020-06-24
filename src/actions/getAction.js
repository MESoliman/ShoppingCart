import { GET_ITEMS_CART } from "./types";

export const getNumbers = () => {
  return (dispatch) => {
    console.log("Number of Items in Cart");
    dispatch({
      type: GET_ITEMS_CART,
    });
  };
};
