import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { UserData } from "../../lib/supabase/getUserData";
import JobInterface from "./JobInterface";
import { Jobs } from "./Jobs";

interface Props {
  user: UserData;
  jobs: JobInterface[];
}

export const JobsContainer: FC<Props> = ({ jobs, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useRouter();
  console.log(jobs);

  return <Jobs {...{ jobs, user, isLoading, pathname }} />;
};
