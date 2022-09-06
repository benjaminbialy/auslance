import React, { Dispatch, FC, SetStateAction } from "react";
import { AccountTypeOption } from "./AccountTypeOption";
import { FreelancerAccount } from "./FreelancerAccount";
import { AccountDetails, AccountType } from "./types";

interface Props {
  loading: boolean;
  accountType: AccountType;
  setAccountType: Dispatch<SetStateAction<AccountType>>;
  accountDetails: AccountDetails;
  setAccountDetails: Dispatch<SetStateAction<AccountDetails>>;
}

export const CreateAccount: FC<Props> = ({
  loading,
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
      {accountType == "Freelancer" && (
        <FreelancerAccount
          {...{ loading, accountDetails, setAccountDetails }}
        />
      )}
    </div>
  );
};
