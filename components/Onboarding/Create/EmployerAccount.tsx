import React, { Dispatch, FC, SetStateAction } from "react";
import { Freelancer } from "../../Freelancer/types";
import ArrayInObjectTextInput from "../../Inputs/ArrayInObjectTextInput";
import { ObjectNumberInput } from "../../Inputs/ObjectNumberInput";
import { ObjectTextInput } from "../../Inputs/ObjectTextInput";
import { AccountDetails } from "./types";

interface Props {
  loading: boolean;
  accountDetails: AccountDetails;
  setAccountDetails: Dispatch<SetStateAction<AccountDetails>>;
}

export const EmployerAccount: FC<Props> = ({
  loading,
  accountDetails,
  setAccountDetails,
}) => {
  return (
    <form>
      <ObjectNumberInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"Hourly Budget (cents)"}
        field={"hourlyBudget"}
        min={0}
        step={10}
      />
      <ObjectTextInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"Bio"}
        field={"bio"}
      />
      <ObjectTextInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"Business name"}
        field={"name"}
      />
      <ObjectTextInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"Location"}
        field={"location"}
      />
      <ObjectTextInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"Timezone"}
        field={"timezone"}
      />
      <ObjectTextInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"LinkedIn"}
        field={"linkedIn"}
      />
      <ObjectNumberInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"Hours per week"}
        field={"timeAvailable"}
        min={0}
        step={1}
      />
      <ObjectTextInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"Website"}
        field={"website"}
      />
      <div>
        {" "}
        {!accountDetails.hasOwnProperty("policies")
          ? ""
          : accountDetails.policies.map((policy, index) => (
              <div className="flex" key={"policy-" + index}>
                <div>Skill {index + 1}:</div>
                <ArrayInObjectTextInput
                  placeholder={"Enter a policy"}
                  value={accountDetails}
                  setValue={setAccountDetails}
                  field={"policies"}
                  index={index}
                />
                <button
                  onClick={() => {
                    setAccountDetails((prev) => ({
                      ...prev,
                      policies: [
                        ...prev.policies.slice(0, index),
                        ...prev.policies.slice(index + 1),
                      ],
                    }));
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        <button
          onClick={() => {
            console.log(accountDetails.policies);
            setAccountDetails((prev: AccountDetails) => ({
              ...prev,
              policies: [...prev.policies, ""],
            }));
          }}
        >
          Add new policy
        </button>
      </div>
    </form>
  );
};
