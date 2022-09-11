import React, { Dispatch, FC, SetStateAction } from "react";
import ArrayInObjectTextInput from "../../Inputs/ArrayInObjectTextInput";
import { InputLabelWrapper } from "../../Inputs/InputLabelWrapper";
import { ObjectNumberInput } from "../../Inputs/ObjectNumberInput";
import { ObjectTextInput } from "../../Inputs/ObjectTextInput";
import { AccountDetails } from "./types";

interface Props {
  id: string;
  loading: boolean;
  accountDetails: AccountDetails;
  setAccountDetails: Dispatch<SetStateAction<AccountDetails>>;
}

export const FreelancerAccount: FC<Props> = ({
  id,
  loading,
  accountDetails,
  setAccountDetails,
}) => {
  return (
    <form className="px-24 py-16" onSubmit={() => saveFreelanceAccount()}>
      <InputLabelWrapper id={"hourlyRate-" + id} label={"Hourly Rate (cents)"}>
        <ObjectNumberInput
          id={id}
          loading={loading}
          required={true}
          value={accountDetails}
          setValue={setAccountDetails}
          placeholder={"Hourly Rate (cents)"}
          field={"hourlyRate"}
          min={0}
          step={10}
        />
      </InputLabelWrapper>
      <InputLabelWrapper id={"bio-" + id} label={"Bio"}>
        <ObjectTextInput
          id={id}
          loading={loading}
          required={true}
          value={accountDetails}
          setValue={setAccountDetails}
          placeholder={"Bio"}
          field={"bio"}
        />
      </InputLabelWrapper>
      <InputLabelWrapper id={"headline-" + id} label={"Headline"}>
        <ObjectTextInput
          id={id}
          loading={loading}
          required={true}
          value={accountDetails}
          setValue={setAccountDetails}
          placeholder={"Headline"}
          field={"headline"}
        />
      </InputLabelWrapper>
      <InputLabelWrapper id={"location-" + id} label={"Location"}>
        <ObjectTextInput
          id={id}
          loading={loading}
          required={true}
          value={accountDetails}
          setValue={setAccountDetails}
          placeholder={"Location"}
          field={"location"}
        />
      </InputLabelWrapper>
      <InputLabelWrapper id={"timezone-" + id} label={"Timezone"}>
        <ObjectTextInput
          id={id}
          loading={loading}
          required={true}
          value={accountDetails}
          setValue={setAccountDetails}
          placeholder={"Timezone"}
          field={"timezone"}
        />
      </InputLabelWrapper>
      <InputLabelWrapper id={"linkedIn-" + id} label={"LinkedIn URL"}>
        <ObjectTextInput
          id={id}
          loading={loading}
          required={true}
          value={accountDetails}
          setValue={setAccountDetails}
          placeholder={"LinkedIn"}
          field={"linkedIn"}
        />
      </InputLabelWrapper>
      <InputLabelWrapper id={"gitHub-" + id} label={"GitHub URL"}>
        <ObjectTextInput
          id={id}
          loading={loading}
          required={true}
          value={accountDetails}
          setValue={setAccountDetails}
          placeholder={"GitHub"}
          field={"gitHub"}
        />
      </InputLabelWrapper>
      <InputLabelWrapper
        id={"yearsOfExperience-" + id}
        label={"Years of experience"}
      >
        <ObjectNumberInput
          id={id}
          loading={loading}
          required={true}
          value={accountDetails}
          setValue={setAccountDetails}
          placeholder={"Years of experience"}
          field={"yearsOfExperience"}
          min={0}
          step={1}
        />
      </InputLabelWrapper>

      {/* Select for expertise level */}
      <div className="bg-green-400">
        <div>Skills</div>
        {!accountDetails.hasOwnProperty("skills")
          ? ""
          : accountDetails.skills.map((skill, index) => (
              <div className="flex" key={"skill-" + index}>
                <InputLabelWrapper
                  key={"skills-" + index}
                  id={"skills-" + index + "-" + id}
                  label={"Skill " + (index + 1)}
                >
                  <ArrayInObjectTextInput
                    id={id}
                    placeholder={"Enter a skill"}
                    value={accountDetails}
                    setValue={setAccountDetails}
                    field={"skills"}
                    index={index}
                  />
                </InputLabelWrapper>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAccountDetails((prev: AccountDetails) => ({
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
          onClick={(e) => {
            e.preventDefault();
            console.log(accountDetails.skills);
            setAccountDetails((prev: AccountDetails) => ({
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
      <InputLabelWrapper
        id={"timeAvailable-" + id}
        label={"Hours avaliable per week"}
      >
        <ObjectNumberInput
          id={id}
          loading={loading}
          required={true}
          value={accountDetails}
          setValue={setAccountDetails}
          placeholder={"Hours avaliable per week"}
          field={"timeAvailable"}
          min={0}
          step={1}
        />
      </InputLabelWrapper>
      <InputLabelWrapper id={"website-" + id} label={"Website URL"}>
        <ObjectTextInput
          id={id}
          loading={loading}
          required={true}
          value={accountDetails}
          setValue={setAccountDetails}
          placeholder={"Website"}
          field={"website"}
        />
      </InputLabelWrapper>
    </form>
  );
};

const saveFreelanceAccount = async () => {};
