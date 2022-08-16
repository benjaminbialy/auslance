import React from "react";
import Job from "./Job";
import JobInterface from "./JobInterface";

function JobScroller({ jobs }) {
  return (
    <div>
      {jobs.map((job: JobInterface) => (
        <Job key={"job-" + job.id} job={job} />
      ))}
    </div>
  );
}

export default JobScroller;
