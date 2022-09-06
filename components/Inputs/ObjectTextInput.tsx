import React, { Dispatch, FC, SetStateAction, ChangeEvent } from "react";

interface Props {
  loading: boolean;
  required: boolean;
  placeholder: string;
  field: string;
  value: Object;
  setValue: Dispatch<SetStateAction<Object>>;
}

export const ObjectTextInput: FC<Props> = ({
  loading,
  required = true,
  placeholder,
  field,
  value,
  setValue,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value[field]}
      required={required}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setValue((prev) => ({ ...prev, [field]: e.target.value }))
      }
    />
  );
};
