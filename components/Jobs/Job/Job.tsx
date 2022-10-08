import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";
import { Proposal } from "../../Proposal/types";
import JobInterface from "../JobInterface";
import { JobContent } from "./JobContent";
import { ProposalForm } from "./ProposalForm";

interface Props {
  isLoading: boolean;
  job: JobInterface;
  proposal: Proposal;
  setProposal: Dispatch<SetStateAction<Proposal>>;
  submitProposal: (e: FormEvent) => Promise<void>;
  id: string;
}

const Job: FC<Props> = ({
  job,
  proposal,
  setProposal,
  isLoading,
  id,
  submitProposal,
}) => {
  return (
    <div className="border-2 border-gray-300 rounded-2xl flex flex-col">
      <JobContent {...{ job, isLoading }} />
      <ProposalForm
        {...{ isLoading, proposal, setProposal, id, submitProposal }}
      />
    </div>
  );
};

export default Job;
