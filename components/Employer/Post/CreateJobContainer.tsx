import React, { useState } from "react";
import CreateJob from "./CreateJob";

function CreateJobContainer() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  // employerName: string;
  // description: string;
  // skills: Array<string>;
  // budget: number;
  // hoursPerWeek: number;
  // timePosted: number;
  // noProposals: number;
  // employerReview: number;
  return <CreateJob {...{ title, setTitle }} />;
}

export default CreateJobContainer;
