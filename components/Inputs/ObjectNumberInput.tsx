import React, { ChangeEvent } from "react";

function ObjectNumberInput({
  value,
  setValue,
  placeholder,
  field,
  min = 0,
  max = null,
  step = 1,
}) {
  return (
    <input
      type={"number"}
      placeholder={placeholder}
      value={value[field]}
      min={min}
      max={max}
      step={1}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setValue((prev) => ({ ...prev, [field]: e.target.value }))
      }
    />
  );
}

export default ObjectNumberInput;
