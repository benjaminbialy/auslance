import Link from "next/link";
import React, { FC } from "react";
import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";
import { getJobLengthMonths } from "../../utils/getJobLengthMonths";
import { getTimeAgoFromEpoch } from "../../utils/getTimeAgoFromEpoch";
import { centsToDollars } from "../../utils/moneyConversions";
import { FlexWrapper } from "../Wrappers/FlexWrapper";
import JobInterface from "./JobInterface";

interface Props {
  job: JobInterface;
}

export const JobPreview: FC<Props> = ({ job }) => {
  return (
    <div className="border-2 border-gray-300 rounded-md p-6 mb-6">
      {/* <Link href={`jobs/${job.job_id}`}>
        <a className="text-red-500">{job.job_id}</a>
      </Link> */}
      <div className="text-lg font-semibold">{job.title}</div>
      <FlexWrapper>
        <div>
          {job.employers.name + ", " + capitaliseFirstLetter(job.location)}
        </div>
      </FlexWrapper>
      <FlexWrapper>
        <div className="text-gray-600">
          {job.is_hourly
            ? `Paying up to $${centsToDollars(job.max_cents_per_hour)} per hour`
            : `Has a budget of $${centsToDollars(job.max_cents_per_hour)}`}
        </div>
        <div className="mx-1 text-gray-600">-</div>
        <div className="text-gray-600">{getJobLengthMonths(job.length)}</div>
        <div className="mx-1 text-gray-600">-</div>
        <div className="text-gray-600">
          Posted {getTimeAgoFromEpoch(job.time_posted)}
        </div>
      </FlexWrapper>
      <div>{job.description}</div>
      <div>{job.full_price}</div>
      <div>{job.remote_level}</div>
      {job.skills.map((skill: string) => (
        <div key={"skill-" + skill}>{skill}</div>
      ))}
      <div>{job.no_proposals}</div>
    </div>
  );
};
