import { useRouter } from "next/router";
import React, { Dispatch, FC, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../globals/Auth";
import { Employer } from "../../Employer/types";
import { Freelancer } from "../../Freelancer/types";
import { CreateAccount } from "./CreateAccount";

export type AccountType = "Freelancer" | "Employer" | null;
export type AccountDetails = Employer | Freelancer | {};

export const CreateAccountContainer: FC = () => {
  const [accountType, setAccountType] = useState<AccountType>(null);
  const [accountDetails, setAccountDetails] = useState<AccountDetails>({});

  // once completed mark as onboarded
  return (
    <CreateAccount
      {...{ accountType, setAccountType, accountDetails, setAccountDetails }}
    />
  );
};
