import React, { FC } from "react";
import { LoginContainer } from "../components/Login/LoginContainer";
import { supabase } from "../lib/supabase/supabaseClient";
import { protectRoute } from "../utils/auth/protectRoute";

const login: FC = () => {
  return <LoginContainer />;
};

export default login;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return protectRoute(user);
  }

  return { props: { user: user } };
}
