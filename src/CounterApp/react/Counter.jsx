import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/CounterSlice";

const Counter = () => {
  const updatedCount = useSelector((state) => state.Counter.value);
  console.log(updatedCount)

  const dispatch = useDispatch();

  const handleincrement = () => {
    dispatch(increment());
  };
  const handledecrement = () => {
    dispatch(decrement());
  };
  const handlereset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <p>Count : {updatedCount}</p>
      <button onClick={handleincrement}>INCREMENT</button>
      <button onClick={handledecrement}>DECREMENT</button>
      <button onClick={handlereset}>RESET</button>
    </div>
  );
};

export default Counter;
