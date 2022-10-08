import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface Props {
  isLoading: boolean;
  isRequired: boolean;
  placeholder: string;
  field: string;
  labelText: string;
  value: Object;
  setValue: Dispatch<SetStateAction<Object>>;
  min: number;
  max?: number;
  step?: number;
  id: string;
}

export const ObjectNumberInput: FC<Props> = ({
  isLoading,
  isRequired = false,
  value,
  setValue,
  placeholder,
  field,
  labelText,
  min = 0,
  max = null,
  step = 1,
  id,
}) => {
  return (
    <>
      <label htmlFor={`${field}-${id}`}>{labelText}</label>
      <input
        id={`${field}-${id}`}
        type={"number"}
        placeholder={placeholder}
        value={value[field]?.toString()}
        min={min}
        max={max}
        step={step}
        required={isRequired}
        disabled={isLoading}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue((prev) => ({ ...prev, [field]: parseInt(e.target.value) }))
        }
      />
    </>
  );
};
