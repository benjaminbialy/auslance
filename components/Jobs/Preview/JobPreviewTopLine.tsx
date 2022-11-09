import Link from "next/link";
import React, { Dispatch, FC, SetStateAction } from "react";
import { FreelancerInterface } from "../../Freelancer/types";
import { FlexWrapper } from "../../Wrappers/FlexWrapper";
import { ProposedJobsMap, SavedJobsMap } from "../types";
import { JobPreviewBookmark } from "./JobPreviewBookmark";

interface Props {
  jobID: number;
  title: string;
  freelancers: FreelancerInterface[];
  savedJobsMap: SavedJobsMap;
  setSavedJobsMap: Dispatch<SetStateAction<SavedJobsMap>>;
  proposedJobsMap: ProposedJobsMap;
}

export const JobPreviewTopLine: FC<Props> = ({
  jobID,
  title,
  freelancers,
  savedJobsMap,
  setSavedJobsMap,
  proposedJobsMap,
}) => {
  const isFreelancer = freelancers?.length > 0;
  const isSaved = savedJobsMap[jobID] ? true : false;
  const hasSentProposal = proposedJobsMap[jobID] ? true : false;

  return (
    <FlexWrapper flexProps="justify-between items-center">
      <FlexWrapper flexProps="items-center">
        <Link href={`jobs/${jobID}`}>
          <a className="text-lg font-semibold">{title} </a>
        </Link>
        {hasSentProposal && (
          <Link href={`proposals/${proposedJobsMap[jobID]}`}>
            <a className="ml-1 text-gray-400">You&apos;ve applied! </a>
          </Link>
        )}
      </FlexWrapper>
      {isFreelancer && (
        <JobPreviewBookmark
          {...{ jobID, isSaved, setSavedJobsMap, savedJobsMap }}
          freelancer_id={freelancers[0].freelancer_id}
        />
      )}
    </FlexWrapper>
  );
};
