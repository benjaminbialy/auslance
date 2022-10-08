import React, { FC } from "react";
import JobInterface from "../../../Jobs/JobInterface";
import { EmployerInterface } from "../../types";

interface Props {
  isLoading: boolean;
  employer: EmployerInterface;
  jobs: JobInterface[];
}

export const EditJob: FC<Props> = ({ isLoading, employer, jobs }) => {
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div>Employer</div>
      <div>{JSON.stringify(employer)}</div>
      <div>
        <div>jobs</div>
        <div>{JSON.stringify(jobs[0])}</div>
      </div>
    </div>
  );
};
