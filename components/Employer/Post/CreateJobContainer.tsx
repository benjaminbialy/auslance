import React, { useId, useState } from "react";
import JobInterface from "../../Jobs/JobInterface";
import CreateJob from "./CreateJob";

function CreateJobContainer() {
  const id = useId();
  const [job, setJob] = useState<JobInterface>({
    title: "",
    location: "",
    employerName: "",
    description: "",
    skills: [],
    budget: 0,
    hoursPerWeek: 0,
    timePosted: 0,
    noProposals: 0,
    employerReview: 1,
  });

  return <CreateJob {...{ job, setJob, id }} />;
}

export default CreateJobContainer;
