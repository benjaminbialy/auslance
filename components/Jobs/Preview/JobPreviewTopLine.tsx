import Link from "next/link";
import React, { Dispatch, FC, SetStateAction } from "react";
import { FreelancerInterface } from "../../Freelancer/types";
import { FlexWrapper } from "../../Wrappers/FlexWrapper";
import { SavedJobsMap } from "../types";
import { JobPreviewBookmark } from "./JobPreviewBookmark";

interface Props {
  jobID: number;
  title: string;
  freelancers: FreelancerInterface[];
  isSaved: boolean;
  savedJobsMap: SavedJobsMap;
  setSavedJobsMap: Dispatch<SetStateAction<SavedJobsMap>>;
}

export const JobPreviewTopLine: FC<Props> = ({
  jobID,
  title,
  freelancers,
  isSaved,
  savedJobsMap,
  setSavedJobsMap,
}) => {
  const isFreelancer = freelancers?.length > 0;
  return (
    <FlexWrapper flexProps="justify-between items-center">
      <Link href={`jobs/${jobID}`}>
        <a className="text-lg font-semibold">{title}</a>
      </Link>
      {isFreelancer && (
        <JobPreviewBookmark
          {...{ jobID, isSaved, setSavedJobsMap, savedJobsMap }}
          freelancer_id={freelancers[0].freelancer_id}
        />
      )}
    </FlexWrapper>
  );
};
