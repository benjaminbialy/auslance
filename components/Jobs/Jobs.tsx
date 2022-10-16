import { ParsedUrlQuery } from "querystring";
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
  pathname: string;
}

export const Jobs: FC<Props> = ({ isLoading, jobs, user, pathname }) => {
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex justify-center">
      <JobSideBar />
      <div className="flex w-full flex-col max-w-5xl">
        <h3 className="text-4xl mt-10">Find your next gig</h3>
        <JobsNav {...{ pathname }} />
        <JobFilters savedFilters={[]} />
        <JobScroller jobs={jobs} />
      </div>
    </div>
  );
};
