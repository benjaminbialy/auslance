import React, { ChangeEvent } from "react";

function SimpleTextInput({ value, setValue, placeholder }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default SimpleTextInput;
