import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { UserData } from "../../lib/supabase/getUserData";
import { Proposal } from "../Proposal/types";
import JobInterface from "./JobInterface";
import { Jobs } from "./Jobs";
import { ProposedJobsMap, SavedJob, SavedJobsMap } from "./types";

interface Props {
  user: UserData;
  jobs: JobInterface[];
}

export const JobsContainer: FC<Props> = ({ jobs, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const freelancer = user?.freelancers?.[0];
  const proposedJobsMap = getProposedJobsMap(freelancer.proposals);
  const [savedJobsMap, setSavedJobsMap] = useState<SavedJobsMap>(
    getSavedJobsMap(freelancer.saved_jobs)
  );
  const { pathname } = useRouter();
  return (
    <Jobs
      {...{
        jobs,
        user,
        isLoading,
        pathname,
        savedJobsMap,
        setSavedJobsMap,
        proposedJobsMap,
      }}
    />
  );
};

const getSavedJobsMap = (savedJobs: SavedJob[]): SavedJobsMap => {
  const savedJobsMap: SavedJobsMap = {};
  savedJobs.forEach((savedJob: SavedJob) => {
    savedJobsMap[savedJob.job_id] = true;
  });
  return savedJobsMap;
};

const getProposedJobsMap = (proposals: Proposal[]): ProposedJobsMap => {
  const proposedJobsMap: ProposedJobsMap = {};
  proposals.forEach((proposal: Proposal) => {
    proposedJobsMap[proposal.job_id] = proposal.proposal_id;
  });
  return proposedJobsMap;
};
