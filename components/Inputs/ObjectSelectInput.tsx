import React, { Dispatch, FC, SetStateAction, ChangeEvent } from "react";

interface Props {
  isLoading: boolean;
  isRequired: boolean;
  placeholder: string;
  labelText: string;
  field: string;
  value: Object;
  setValue: Dispatch<SetStateAction<Object>>;
  id: string;
  options: SelectOption[];
}

export const ObjectSelectInput: FC<Props> = ({
  isLoading,
  isRequired = true,
  labelText,
  placeholder,
  field,
  value,
  setValue,
  id,
  options,
}) => {
  return (
    <>
      <label
        className={`${isRequired ? "required" : ""}`}
        htmlFor={`${field}-${id}`}
      >
        {labelText}
      </label>
      <select
        id={`${field}-${id}`}
        placeholder={placeholder}
        value={value[field]}
        required={isRequired}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setValue((prev) => ({ ...prev, [field]: e.target.value }))
        }
      >
        {options.map((option: SelectOption) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export interface SelectOption {
  id: string;
  value: string;
  label: string;
}
