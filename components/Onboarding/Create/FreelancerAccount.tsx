import React, { Dispatch, FC, SetStateAction } from "react";
import { Freelancer } from "../../Freelancer/types";
import ArrayInObjectTextInput from "../../Inputs/ArrayInObjectTextInput";
import { ObjectNumberInput } from "../../Inputs/ObjectNumberInput";
import { ObjectTextInput } from "../../Inputs/ObjectTextInput";

interface Props {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  accountDetails: Freelancer;
  setAccountDetails: Dispatch<SetStateAction<Freelancer>>;
}

export const FreelancerAccount: FC<Props> = ({
  loading,
  setLoading,
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
        placeholder={"Hourly Rate (cents)"}
        field={"hourlyRate"}
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
        placeholder={"Headline"}
        field={"headline"}
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
      <ObjectTextInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"GitHub"}
        field={"gitHub"}
      />
      <ObjectNumberInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"Years of experience"}
        field={"yearsOfExperience"}
        min={0}
        step={1}
      />
      {/* Select for expertise level */}
      <div>
        {" "}
        {accountDetails?.skills.map((skill, index) => (
          <div className="flex" key={"skill-" + index}>
            <div>Skill {index + 1}:</div>
            <ArrayInObjectTextInput
              placeholder={"Enter a skill"}
              value={accountDetails}
              setValue={setAccountDetails}
              field={"skills"}
              index={index}
            />
            <button
              onClick={() => {
                setAccountDetails((prev: Freelancer) => ({
                  ...prev,
                  skills: [
                    ...prev.skills.slice(0, index),
                    ...prev.skills.slice(index + 1),
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
            console.log(accountDetails.skills);
            setAccountDetails((prev: Freelancer) => ({
              ...prev,
              skills: [...prev.skills, ""],
            }));
          }}
        >
          Add new skill
        </button>
      </div>
      {/* Select for area of work */}
      {/* Select for visibility */}
      <ObjectNumberInput
        loading={loading}
        required={true}
        value={accountDetails}
        setValue={setAccountDetails}
        placeholder={"Hours avaliable per week"}
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
    </form>
  );
};
