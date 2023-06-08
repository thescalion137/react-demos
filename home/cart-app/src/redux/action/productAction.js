import { ADD_ITEM, DEL_ITEM } from "./productType";

//add to cart
export const addCart = (product) => {
  return {
    type: ADD_ITEM,
    payload: product,
  };
};

//remove from cart
export const delCart = (product) => {
  return {
    type: DEL_ITEM,
    payload: product,
  };
};
