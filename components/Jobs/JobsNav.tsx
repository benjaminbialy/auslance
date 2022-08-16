import React from "react";
import JobsNavItem from "./JobsNavItem";

function JobsNav() {
  return (
    <div className="flex">
      <JobsNavItem href={"/jobs"} text={"My Jobs"} />
      <JobsNavItem href={"/jobs/saved"} text={"Saved"} />
      <JobsNavItem href={"/jobs/recent"} text={"Recent"} />
    </div>
  );
}

export default JobsNav;
