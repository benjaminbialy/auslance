import React, { FC } from "react";
import { JobContainer } from "../../components/Jobs/Job/JobContainer";
import JobInterface from "../../components/Jobs/JobInterface";
import { UserData } from "../../lib/supabase/getUserData";
import { supabase } from "../../lib/supabase/supabaseClient";
import { handleJob } from "../../utils/auth/handleJob";

interface Props {
  job: JobInterface;
  user: UserData;
}
const job_id: FC<Props> = ({ job, user }) => {
  return <JobContainer {...{ job, user }} />;
};

export default job_id;

export async function getServerSideProps({ query, req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleJob(user, query.job_id);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
