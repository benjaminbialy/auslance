import React, { FC } from "react";
import { EditJobContainer } from "../../../components/Employer/Edit/Job/EditJobContainer";
import { EmployerInterface } from "../../../components/Employer/types";
import JobInterface from "../../../components/Jobs/JobInterface";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { handleIsJobCreator } from "../../../utils/auth/handleIsJobCreator";

interface Props {
  employer: EmployerInterface;
  jobs: JobInterface[];
}

const job_id: FC<Props> = ({ employer, jobs }) => {
  return <EditJobContainer {...{ employer, jobs }} />;
};

export default job_id;

export async function getServerSideProps({ query, req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleIsJobCreator(user, query.job_id as string);
  }
  return {
    props: { user },
    redirect: { destination: "/login", permanent: false },
  };
}
