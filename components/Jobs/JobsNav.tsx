import React, { FC } from "react";
import JobsNavItem from "./JobsNavItem";

export const JobsNav: FC = () => {
  return (
    <div className="flex">
      <JobsNavItem href={"/jobs"} text={"My Jobs"} />
      <JobsNavItem href={"/jobs/saved"} text={"Saved"} />
      <JobsNavItem href={"/jobs/recent"} text={"Recent"} />
    </div>
  );
};
