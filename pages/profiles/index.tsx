import React from "react";
import { supabase } from "../../lib/supabase/supabaseClient";
import { handleNotOnboarded } from "../../utils/auth/handleNotOnboarded";

function index() {
  return <div>my profile</div>;
}

export default index;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleNotOnboarded(user);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
