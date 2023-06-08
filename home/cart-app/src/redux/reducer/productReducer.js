import { ADD_ITEM, DEL_ITEM } from "../action/productType";

// const initialState = {
//   loading: false,
//   cart: [],
//   error: "",
// };

const cart = [];

const productReducer = (state = cart, action) => {
  const product = action.payload;
  console.log("reducer state : ", state);
  switch (action.type) {
    case ADD_ITEM: {
      console.log("add item reducer");
      //check if already exist or not
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    }

    case DEL_ITEM:
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    default:
      return state;
  }
};

export default productReducer;
