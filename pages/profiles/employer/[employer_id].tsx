import React, { FC } from "react";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { handleNotOnboarded } from "../../../utils/auth/handleNotOnboarded";

const EmployerID: FC = () => {
  return <div>EmployerID</div>;
};

export default EmployerID;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleNotOnboarded(user);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
