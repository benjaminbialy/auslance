import Router from "next/router";
import React, { FormEvent, useId, useState } from "react";
import { defaultJob } from "../../../defaultValues/defaultJob";
import { JobStatus } from "../../../globalTypes/databaseTypes";
import { useDatabase } from "../../../lib/supabase/useDatabase";
import JobInterface from "../../Jobs/JobInterface";
import CreateJob from "./CreateJob";

function CreateJobContainer({ employer }) {
  const id = useId();
  const [job, setJob] = useState<JobInterface>(defaultJob);
  const { write, error } = useDatabase();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const jobEntry = {
        employer_id: employer.employer_id,
        status: JobStatus.posted,
        ...job,
        time_posted: Date.now(),
      };
      const wasSuccessful = await write("jobs", jobEntry);
      if (wasSuccessful) Router.push("/employer/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return <CreateJob {...{ job, setJob, id, onSubmit, error }} />;
}

export default CreateJobContainer;
