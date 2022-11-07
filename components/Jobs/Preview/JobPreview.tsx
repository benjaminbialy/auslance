import React, { Dispatch, FC, SetStateAction } from "react";
import { capitaliseFirstLetter } from "../../../utils/capitaliseFirstLetter";
import { getJobLengthMonths } from "../../../utils/jobs/getJobLengthMonths";
import { getJobRemoteLevelMessage } from "../../../utils/jobs/getJobRemoteLevelMessage";
import { FlexWrapper } from "../../Wrappers/FlexWrapper";
import JobInterface from "../JobInterface";
import { UserData } from "../../../lib/supabase/getUserData";
import { JobPreviewTopLine } from "./JobPreviewTopLine";
import { JobPreviewKeyDetails } from "./JobPreviewKeyDetails";
import { JobPreviewSkillsScroller } from "./JobPreviewSkillsScroller";
import { JobPreviewRemoteLevel } from "./JobPreviewRemoteLevel";
import { SavedJobsMap } from "../types";

interface Props {
  job: JobInterface;
  user: UserData;
  isSaved: boolean;
  savedJobsMap: SavedJobsMap;
  setSavedJobsMap: Dispatch<SetStateAction<SavedJobsMap>>;
}

export const JobPreview: FC<Props> = ({
  job,
  user,
  isSaved,
  savedJobsMap,
  setSavedJobsMap,
}) => {
  const {
    job_id: jobID,
    title,
    description,
    remote_level: remoteLevel,
    length,
    employers,
    location,
    skills,
  } = job;
  const { freelancers } = user;
  return (
    <div className="border-2 border-gray-300 rounded-md p-6 mb-6">
      <JobPreviewTopLine
        {...{
          jobID,
          title,
          freelancers,
          isSaved,
          setSavedJobsMap,
          savedJobsMap,
        }}
      />
      <div>{employers.name + ", " + capitaliseFirstLetter(location)}</div>
      <JobPreviewKeyDetails {...{ job }} />
      <div>{description}</div>
      <JobPreviewSkillsScroller {...{ jobID, skills }} />
      <JobPreviewRemoteLevel {...{ remoteLevel, length }} />
    </div>
  );
};
