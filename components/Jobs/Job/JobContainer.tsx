import React, { FC, FormEvent, useId, useState } from "react";
import { defaultProposal } from "../../../defaultValues/defaultProposal";
import { ProposalStatus } from "../../../globalTypes/databaseTypes";
import { UserData } from "../../../lib/supabase/getUserData";
import { useDatabase } from "../../../lib/supabase/useDatabase";
import { Proposal } from "../../Proposal/types";
import JobInterface from "../JobInterface";
import Job from "./Job";

interface Props {
  job: JobInterface;
  user: UserData;
}
export const JobContainer: FC<Props> = ({ job, user }) => {
  const [proposal, setProposal] = useState(defaultProposal);
  const { write, loading: isLoading } = useDatabase();
  const id = useId();

  const submitProposal = async (e: FormEvent) => {
    e.preventDefault();
    const proposalToSave: Proposal = {
      ...proposal,
      time_sent: Date.now(),
      freelancer_id: user.freelancers[0].freelancer_id,
      employer_id: job.employer_id,
      job_id: job.job_id,
      proposal: ProposalStatus.sent,
    };
    try {
      const wasSuccessful = await write("proposals", proposalToSave);
      if (wasSuccessful) alert(wasSuccessful);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Job {...{ isLoading, job, proposal, setProposal, id, submitProposal }} />
  );
};
