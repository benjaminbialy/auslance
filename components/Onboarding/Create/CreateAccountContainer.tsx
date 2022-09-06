import { useRouter } from "next/router";
import React, { Dispatch, FC, useContext, useEffect, useState } from "react";
import { CreateAccount } from "./CreateAccount";
import { AccountDetails, AccountType, defaultAccountDetails } from "./types";

export const CreateAccountContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState<AccountType>(null);
  const [accountDetails, setAccountDetails] = useState<AccountDetails>(
    defaultAccountDetails
  );

  // once completed mark as onboarded
  return (
    <CreateAccount
      {...{
        loading,
        accountType,
        setAccountType,
        accountDetails,
        setAccountDetails,
      }}
    />
  );
};
