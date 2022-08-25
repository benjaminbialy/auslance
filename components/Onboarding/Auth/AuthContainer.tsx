import React, { Dispatch, FC, SetStateAction } from "react";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const AuthContainer: FC<Props> = ({ value, setValue }) => {
  return <div>AuthContainer</div>;
};
