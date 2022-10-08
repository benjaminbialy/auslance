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
  console.log(user);

  return <Jobs {...{ jobs, user, isLoading }} />;
};
