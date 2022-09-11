import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface Props {
  loading: boolean;
  required: boolean;
  placeholder: string;
  field: string;
  value: Object;
  setValue: Dispatch<SetStateAction<Object>>;
  min: number;
  max?: number;
  step?: number;
  id: string;
}

export const ObjectNumberInput: FC<Props> = ({
  loading,
  required = false,
  value,
  setValue,
  placeholder,
  field,
  min = 0,
  max = null,
  step = 1,
  id,
}) => {
  return (
    <input
      id={field + "-" + id}
      type={"number"}
      placeholder={placeholder}
      value={value[field]}
      min={min}
      max={max}
      step={step}
      required={required}
      disabled={loading}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setValue((prev) => ({ ...prev, [field]: e.target.value }))
      }
    />
  );
};
