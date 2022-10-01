import React, { FC, useId, useState } from "react";
import { CreateAccount } from "./CreateAccount";
import { AccountDetails, AccountType, defaultAccountDetails } from "./types";

export const CreateAccountContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState<AccountType>(null);
  const id = useId();
  const [accountDetails, setAccountDetails] = useState<AccountDetails>(
    defaultAccountDetails
  );

  return (
    <CreateAccount
      {...{
        loading,
        accountType,
        setAccountType,
        accountDetails,
        setAccountDetails,
        id,
      }}
    />
  );
};
