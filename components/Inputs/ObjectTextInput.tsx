import React, { ChangeEvent } from "react";

function ObjectTextInput({ value, setValue, placeholder, field }) {
  return (
    <input
      placeholder={placeholder}
      value={value[field]}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setValue((prev) => ({ ...prev, [field]: e.target.value }))
      }
    />
  );
}

export default ObjectTextInput;
