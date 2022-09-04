import React, { FC } from "react";
import { AuthContainer } from "../../components/Onboarding/Auth/AuthContainer";
import { supabase } from "../../lib/supabase/supabaseClient";

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (user) {
    return { props: {}, redirect: { destination: "user" } };
  }

  return { props: { user: user } };
}

const auth: FC = () => {
  return <AuthContainer />;
};

export default auth;
