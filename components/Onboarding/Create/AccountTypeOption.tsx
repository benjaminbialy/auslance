import React, { Dispatch, FC, SetStateAction } from "react";
import { AccountType } from "./types";

interface Props {
  option: AccountType;
  accountType: AccountType;
  setAccountType: Dispatch<SetStateAction<AccountType>>;
}

export const AccountTypeOption: FC<Props> = ({
  option,
  accountType,
  setAccountType,
}) => {
  return (
    <div
      className={
        (accountType == option ? "border-green-300" : "border-blue-300") +
        " " +
        "p-4 mx-2 bg-slate-50 border-2"
      }
      onClick={() => {
        setAccountType(option);
      }}
    >
      {option}
    </div>
  );
};
