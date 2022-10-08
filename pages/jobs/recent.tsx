import React from "react";
import JobContainer from "../../components/Jobs/JobsContainer";
import { supabase } from "../../lib/supabase/supabaseClient";
import { handleNotOnboarded } from "../../utils/auth/handleNotOnboarded";

function recent() {
  return <JobContainer />;
}

export default recent;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleNotOnboarded(user);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
