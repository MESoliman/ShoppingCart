import { ADD_PRODUCT_CART } from "./types";

export const addCart = (productId) => {
  return (dispatch) => {
    console.log("Adding to cart");
    console.log("product:", productId);
    dispatch({
      type: ADD_PRODUCT_CART,
      payload: productId,
    });
  };
};
