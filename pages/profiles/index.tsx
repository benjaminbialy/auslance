import React from "react";
import { ProfileContainer } from "../../components/Profile/ProfileContainer";
import { supabase } from "../../lib/supabase/supabaseClient";
import { handleProfile } from "../../utils/auth/handleProfile";

function index({ user }) {
  return <ProfileContainer {...{ user }} />;
}

export default index;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleProfile(user);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
