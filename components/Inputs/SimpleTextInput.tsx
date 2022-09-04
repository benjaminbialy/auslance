import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  disabled?: boolean;
}

const SimpleTextInput: FC<Props> = ({
  value,
  setValue,
  placeholder,
  disabled = false,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default SimpleTextInput;
