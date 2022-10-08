import { useState } from "react";

export const useToggle = (defaultValue: boolean) => {
  const [isShown, setIsShown] = useState(defaultValue);

  const toggle = () => {
    setIsShown((prevValue) => !prevValue);
  };

  const reset = () => {
    setIsShown(defaultValue);
  };

  return { isShown, toggle, reset };
};
