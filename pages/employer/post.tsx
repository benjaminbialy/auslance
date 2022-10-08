import React, { FC } from "react";
import CreateJobContainer from "../../components/Employer/Post/CreateJobContainer";
import { EmployerInterface } from "../../components/Employer/types";
import { supabase } from "../../lib/supabase/supabaseClient";
import { handleIsEmployer } from "../../utils/auth/handleIsEmployer";

interface Props {
  employer: EmployerInterface;
}

const post: FC<Props> = ({ employer }) => {
  return <CreateJobContainer {...{ employer }} />;
};

export default post;

export async function getServerSideProps({ query, req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleIsEmployer(user);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
