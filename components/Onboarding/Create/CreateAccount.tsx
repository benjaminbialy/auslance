import React, { Dispatch, FC, SetStateAction } from "react";
import { AccountTypeOption } from "./AccountTypeOption";
import { AccountDetails, AccountType } from "./CreateAccountContainer";

interface Props {
  accountType: AccountType;
  setAccountType: Dispatch<SetStateAction<AccountType>>;
  accountDetails: AccountDetails;
  setAccountDetails: Dispatch<SetStateAction<AccountDetails>>;
}

export const CreateAccount: FC<Props> = ({
  accountType,
  setAccountType,
  accountDetails,
  setAccountDetails,
}) => {
  return (
    <div>
      <div>
        <AccountTypeOption
          option="Employer"
          setAccountType={setAccountType}
          accountType={accountType}
        />
        <AccountTypeOption
          option="Freelancer"
          setAccountType={setAccountType}
          accountType={accountType}
        />
      </div>
    </div>
  );
};
