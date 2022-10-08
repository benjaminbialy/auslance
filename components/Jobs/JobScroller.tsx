import React, { FC } from "react";
import JobInterface from "./JobInterface";
import { JobPreview } from "./JobPreview";

interface Props {
  jobs: JobInterface[];
}

export const JobScroller: FC<Props> = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job: JobInterface) => (
        <JobPreview key={"job-" + job.job_id} job={job} />
      ))}
    </div>
  );
};
