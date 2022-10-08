import React, { FC } from "react";
import { AuthContainer } from "../../components/Onboarding/Auth/AuthContainer";
import { supabase } from "../../lib/supabase/supabaseClient";
import { protectRoute } from "../../utils/auth/protectRoute";

const auth: FC = () => {
  return <AuthContainer />;
};

export default auth;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    protectRoute(user);
  }

  return { props: { user: user } };
}
