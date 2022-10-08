import React, { FC, ReactElement } from "react";

interface Props {
  id: string;
  label: string;
  children: ReactElement;
}

export const InputLabelWrapper: FC<Props> = ({ label, children, id }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
};
