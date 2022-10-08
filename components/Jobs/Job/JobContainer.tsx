import React, { FC, useId, useState } from "react";
import { defaultProposal } from "../../../defaultValues/defaultProposal";
import { UserData } from "../../../lib/supabase/getUserData";
import JobInterface from "../JobInterface";
import Job from "./Job";

interface Props {
  job: JobInterface;
  user: UserData;
}
export const JobContainer: FC<Props> = ({ job, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [proposal, setProposal] = useState(defaultProposal);
  const id = useId();

  const submitProposal = async () => {};

  return <Job {...{ isLoading, job, proposal, setProposal, id }} />;
};
