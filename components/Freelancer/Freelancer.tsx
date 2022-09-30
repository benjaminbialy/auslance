import React, { FC } from "react";
import { Error } from "../../globalTypes/error";
import { FreelancerInterface } from "./types";

interface Props {
  isLoading: boolean;
  freelancer: FreelancerInterface;
  error: Error;
}

export const Freelancer: FC<Props> = ({ isLoading, freelancer, error }) => {
  // not found
  // error
  // loading
  // live
  return (
    <div>
      <div className="bg-orange-200 flex flex-col ">
        <div>
          {`${freelancer.users.first_name} ${freelancer.users.last_name}`}
        </div>
        <div>{`Area: ${freelancer.areaOfWork}`}</div>
        <div>{`Bio: ${freelancer.bio}`}</div>
        <div>{`Expertise: ${freelancer.expertiseLevel}`}</div>
        <div>{`GitHub: ${freelancer.gitHub}`}</div>
        <div>{`Headline: ${freelancer.headline}`}</div>
        <div>{`Hourly Rate: ${freelancer.hourlyRate}`}</div>
        <div>{`LinkedIn: ${freelancer.linkedIn}`}</div>
        <div>{`Location: ${freelancer.location}`}</div>
        <div>{`Time available: ${freelancer.timeAvailable}`}</div>
        <div>{`Timezone: ${freelancer.timezone}`}</div>
        <div>{`YOE: ${freelancer.yearsOfExperience}`}</div>
        <div>{`Website: ${freelancer.website}`}</div>
        <div>{`Area: ${freelancer.visibility}`}</div>
      </div>
      <div>content</div>
      <div>bottom</div>
    </div>
  );
};
