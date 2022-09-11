import React, { ChangeEvent } from "react";

function ArrayInObjectTextInput({
  value,
  setValue,
  placeholder,
  field,
  index = 0,
  id,
}) {
  return (
    <input
      id={field + "-" + index + "-" + id}
      placeholder={placeholder}
      value={value[field][index]}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        console.log(value[field]);
        setValue((prev) => ({
          ...prev,
          field: [...prev[field], (prev[field][index] = e.target.value)],
        }));
      }}
    />
  );
}

export default ArrayInObjectTextInput;
