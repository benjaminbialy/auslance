import React from "react";
import CreateJobContainer from "../../components/Employer/Post/CreateJobContainer";
import { supabase } from "../../lib/supabase/supabaseClient";
import { handleNotOnboarded } from "../../utils/auth/handleNotOnboarded";

function post() {
  return <CreateJobContainer />;
}

export default post;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleNotOnboarded(user);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
