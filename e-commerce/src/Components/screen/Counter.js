import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/reducer/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter app Using React-Toolkit</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button onClick={() => dispatch(increment())}>increment</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
