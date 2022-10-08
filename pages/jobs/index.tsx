import React, { FC } from "react";
import JobInterface from "../../components/Jobs/JobInterface";
import { JobsContainer } from "../../components/Jobs/JobsContainer";
import { UserData } from "../../lib/supabase/getUserData";
import { supabase } from "../../lib/supabase/supabaseClient";
import { handleJobs } from "../../utils/auth/handleJobs";

interface Props {
  user: UserData;
  jobs: JobInterface[];
}

const index: FC<Props> = ({ jobs, user }) => {
  return <JobsContainer {...{ jobs, user }} />;
};

export default index;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleJobs(user);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
