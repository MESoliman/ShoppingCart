import { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM } from "./types";

export const updateQuantity = (action, id) => {
  return (dispatch) => {
    console.log("Inside update Quantity");
    console.log("action: ", action);
    console.log("id: ", id);

    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: id,
    });
  };
};

export const removeItem = (id) => {
  return (dispatch) => {
    console.log("clear", id);
    dispatch({
      type: REMOVE_ITEM,
      payload: id,
    });
  };
};
