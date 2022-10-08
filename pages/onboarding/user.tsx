import React, { FC } from "react";
import { UserOnboardingContainer } from "../../components/Onboarding/User/UserOnboardingContainer";
import { supabase } from "../../lib/supabase/supabaseClient";
import { protectRoute } from "../../utils/auth/protectRoute";

const user: FC = () => {
  return <UserOnboardingContainer />;
};

export default user;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    protectRoute(user);
  }

  return { props: { user: user } };
}
