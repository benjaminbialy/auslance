import React, { useState } from "react";
import JobInterface from "../../Jobs/JobInterface";
import CreateJob from "./CreateJob";

function CreateJobContainer() {
  const [job, setJob] = useState<JobInterface>({
    id: 0,
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

  return <CreateJob {...{ job, setJob }} />;
}

export default CreateJobContainer;
