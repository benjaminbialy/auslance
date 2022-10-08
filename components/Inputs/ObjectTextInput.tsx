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
}

export const ObjectTextInput: FC<Props> = ({
  isLoading,
  isRequired = true,
  labelText,
  placeholder,
  field,
  value,
  setValue,
  id,
}) => {
  return (
    <>
      <label
        className={`${isRequired ? "required" : ""}`}
        htmlFor={`${field}-${id}`}
      >
        {labelText}
      </label>
      <input
        id={`${field}-${id}`}
        placeholder={placeholder}
        value={value[field]}
        required={isRequired}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue((prev) => ({ ...prev, [field]: e.target.value }))
        }
      />
    </>
  );
};
