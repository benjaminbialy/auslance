import { NextPage } from "next";
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

const recent: NextPage<Props> = ({ user, jobs }) => {
  return <JobsContainer {...{ user, jobs }} />;
};

export default recent;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleJobs(user, {
      column: "time_posted",
      order: { ascending: false },
    });
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
