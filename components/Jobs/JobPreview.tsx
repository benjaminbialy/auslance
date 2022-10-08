import Link from "next/link";
import React, { FC } from "react";
import JobInterface from "./JobInterface";

interface Props {
  job: JobInterface;
}

export const JobPreview: FC<Props> = ({ job }) => {
  return (
    <div className="border-2 border-gray-300 rounded-2xl">
      <Link href={`jobs/${job.job_id}`}>
        <a className="text-red-500">{job.job_id}</a>
      </Link>
      <div>{job.title}</div>
      <div>{job.location}</div>
      <div>{job.description}</div>
      <div>{job.full_price}</div>
      <div>{job.remote_level}</div>
      {job.skills.map((skill: string) => (
        <div key={"skill-" + skill}>{skill}</div>
      ))}
      <div>{job.no_proposals}</div>
      <div>{job.employers.name}</div>
      <div>{job.employers.location}</div>
    </div>
  );
};
