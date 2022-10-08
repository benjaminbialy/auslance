import React, { FC } from "react";
import { CreateAccountContainer } from "../../components/Onboarding/Create/CreateAccountContainer";
import { supabase } from "../../lib/supabase/supabaseClient";
import { protectRoute } from "../../utils/auth/protectRoute";

const create: FC = () => {
  return <CreateAccountContainer />;
};

export default create;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    protectRoute(user);
  }

  return { props: { user: user } };
}
