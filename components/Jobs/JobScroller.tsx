import React, { Dispatch, FC, SetStateAction } from "react";
import { UserData } from "../../lib/supabase/getUserData";
import JobInterface from "./JobInterface";
import { JobPreview } from "./Preview/JobPreview";
import { SavedJobsMap } from "./types";

interface Props {
  jobs: JobInterface[];
  user: UserData;
  savedJobsMap: SavedJobsMap;
  setSavedJobsMap: Dispatch<SetStateAction<SavedJobsMap>>;
}

export const JobScroller: FC<Props> = ({
  jobs,
  user,
  savedJobsMap,
  setSavedJobsMap,
}) => {
  return (
    <div>
      {jobs.map((job: JobInterface) => {
        return (
          <JobPreview
            key={"job-" + job.job_id}
            {...{ job, user, setSavedJobsMap, savedJobsMap }}
          />
        );
      })}
    </div>
  );
};
