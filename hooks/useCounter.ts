import { useState } from "react";

export const useCounter = (initalCount: number) => {
  const [count, setCount] = useState(initalCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(initalCount);
  };

  return { count, increment, decrement, reset };
};
