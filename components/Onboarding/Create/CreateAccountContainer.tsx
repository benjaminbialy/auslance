import Router from "next/router";
import React, { FC, useContext, useEffect, useId, useState } from "react";
import { AuthContext } from "../../../globals/Auth";
import { CreateAccount } from "./CreateAccount";
import { AccountDetails, AccountType, defaultAccountDetails } from "./types";

export const CreateAccountContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState<AccountType>(null);
  const [accountDetails, setAccountDetails] = useState<AccountDetails>(
    defaultAccountDetails
  );
  const { userData, authenticated } = useContext(AuthContext);
  const id = useId();

  useEffect(() => {
    if (userData.isOnboarded) {
      Router.push("/profiles");
    } else if (!authenticated) {
      Router.push("/onboarding/auth");
    } else if (
      userData.first_name === undefined ||
      userData.last_name === undefined
    ) {
      Router.push("/onboarding/user");
    }
  }, [userData]);

  // once completed mark as onboarded
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
