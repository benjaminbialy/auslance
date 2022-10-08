import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";
import { ObjectNumberInput } from "../../Inputs/ObjectNumberInput";
import { ObjectTextInput } from "../../Inputs/ObjectTextInput";
import { Proposal } from "../../Proposal/types";

interface Props {
  isLoading: boolean;
  proposal: Proposal;
  setProposal: Dispatch<SetStateAction<Proposal>>;
  submitProposal: (e: FormEvent) => Promise<void>;
  id: string;
}

export const ProposalForm: FC<Props> = ({
  isLoading,
  proposal,
  setProposal,
  id,
  submitProposal,
}) => {
  return (
    <form
      className="flex flex-col"
      onSubmit={(e: FormEvent) => submitProposal(e)}
    >
      <ObjectTextInput
        isLoading={isLoading}
        isRequired={true}
        placeholder={"I'm your engineer!"}
        labelText={"Subject Line"}
        field={"subject_line"}
        value={proposal}
        setValue={setProposal}
        id={id}
      />
      <ObjectTextInput
        isLoading={isLoading}
        isRequired={true}
        placeholder={"Hey mate! How'd you like a rockstar working for you?"}
        labelText={"Proposal content"}
        field={"content"}
        value={proposal}
        setValue={setProposal}
        id={id}
      />
      <ObjectNumberInput
        isLoading={isLoading}
        isRequired={true}
        min={0}
        placeholder={"10000"}
        labelText={"Your hourly rate"}
        field={"cents_per_hour"}
        value={proposal}
        setValue={setProposal}
        id={id}
      />
      <ObjectNumberInput
        isLoading={isLoading}
        isRequired={true}
        min={0}
        placeholder={"8000000"}
        labelText={"Your fixed rate"}
        field={"full_price"}
        value={proposal}
        setValue={setProposal}
        id={id}
      />
      <button
        type="submit"
        className="bg-green-400 p-2 w-96 mx-auto rounded my-2"
      >
        Send proposal
      </button>
    </form>
  );
};
