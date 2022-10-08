import React, { FC } from "react";
import { FreelancerInterface } from "./types";

interface Props {
  freelancer: FreelancerInterface;
}

export const Freelancer: FC<Props> = ({ freelancer }) => {
  console.log(freelancer);
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
        <div>{`Area: ${freelancer.area_of_work}`}</div>
        <div>{`Bio: ${freelancer.bio}`}</div>
        <div>{`Expertise: ${freelancer.expertise_level}`}</div>
        <div>{`GitHub: ${freelancer.github}`}</div>
        <div>{`Headline: ${freelancer.headline}`}</div>
        <div>{`Hourly Rate: ${freelancer.hourly_rate}`}</div>
        <div>{`LinkedIn: ${freelancer.linkedin}`}</div>
        <div>{`Location: ${freelancer.location}`}</div>
        <div>{`Time available: ${freelancer.time_available}`}</div>
        <div>{`Timezone: ${freelancer.timezone}`}</div>
        <div>{`YOE: ${freelancer.years_of_experience}`}</div>
        <div>{`Website: ${freelancer.website}`}</div>
        <div>{`Visibility: ${freelancer.visibility}`}</div>
      </div>
      <div>content</div>
      <div>bottom</div>
    </div>
  );
};
