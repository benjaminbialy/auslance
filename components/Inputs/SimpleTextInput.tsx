import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
}

const SimpleTextInput: FC<Props> = ({
  value,
  setValue,
  placeholder,
  disabled = false,
  required = false,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      required={required}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default SimpleTextInput;
