import Link from "next/link";
import React, { FC, useEffect } from "react";
import { Error } from "../../../globalTypes/error";
import JobInterface from "../../Jobs/JobInterface";
import { EmployerInterface } from "../types";

interface Props {
  isLoading: boolean;
  error: Error;
  employer: EmployerInterface;
}

export const EmployerDashboard: FC<Props> = ({
  isLoading,
  error,
  employer,
}) => {
  useEffect(() => {
    console.log(employer);
  }, [employer]);

  if (error.error) return <div>{JSON.stringify(error)}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>Top part</div>
      <div>
        <div>Jobs</div>
        {employer?.jobs?.map((job: JobInterface) => (
          <div className="my-2 p-4 bg-orange-200" key={job.job_id}>
            <Link href={`/employer/edit/${job.job_id}`}>
              <a>Job No. {job.job_id}</a>
            </Link>
            {JSON.stringify(job)}
          </div>
        ))}
      </div>
    </div>
  );
};
