import React, { FC } from "react";
import { UserData } from "../../lib/supabase/getUserData";
import { JobFilters } from "./JobFilters";
import JobInterface from "./JobInterface";
import { JobScroller } from "./JobScroller";
import { JobSideBar } from "./JobSideBar";
import { JobsNav } from "./JobsNav";

interface Props {
  isLoading: boolean;
  jobs: JobInterface[];
  user: UserData;
}

export const Jobs: FC<Props> = ({ isLoading, jobs, user }) => {
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex justify-center">
      <JobSideBar />
      <div className="flex flex-col bg-gray-400 max-w-5xl">
        <JobsNav />
        <JobFilters savedFilters={[]} />
        <JobScroller jobs={jobs} />
      </div>
    </div>
  );
};
