import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("increment reducer called ");
      state.count += 1;
    },
    decrement: (state) => {
      console.log("decrement reducer called ");
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log("increment by amount reducer called ");
      state.value += action.payload;
    },
  },
});

export default CounterSlice.reducer;
export const { increment, decrement, incrementByAmount } = CounterSlice.actions;
