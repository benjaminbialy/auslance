import React, { FC, useState } from "react";
import JobInterface from "../../../Jobs/JobInterface";
import { EmployerInterface } from "../../types";
import { EditJob } from "./EditJob";

interface Props {
  employer: EmployerInterface;
  jobs: JobInterface[];
}

export const EditJobContainer: FC<Props> = ({ employer, jobs }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (jobs.length < 1) return <div>This job does not exist!</div>;

  return <EditJob {...{ isLoading, employer, jobs }} />;
};
