import React, { FC } from "react";
import { EmployerInterface } from "./types";

interface Props {
  employer: EmployerInterface;
}

export const Employer: FC<Props> = ({ employer }) => {
  // not found
  // error
  // loading
  // live
  return (
    <div>
      <div className="bg-orange-200 flex flex-col ">
        <div>{`Name: ${employer.name}`}</div>
        <div>{`Bio: ${employer.bio}`}</div>
        <div>{`Hourly budget: ${employer.hourlyBudget}`}</div>
        <div>{`LinkedIn: ${employer.linkedIn}`}</div>
        <div>{`Location: ${employer.location}`}</div>
        <div>{`Time available: ${employer.timeAvailable}`}</div>
        <div>{`Timezone: ${employer.timezone}`}</div>
        <div>{`Website: ${employer.website}`}</div>
        <div>
          {employer?.policies?.map((policy, index) => (
            <div key={index}>{policy}</div>
          ))}
        </div>
      </div>
      <div>content</div>
      <div>bottom</div>
    </div>
  );
};
