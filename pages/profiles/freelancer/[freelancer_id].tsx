import React, { FC } from "react";
import { FreelancerContainer } from "../../../components/Freelancer/FreelancerContainer";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { handleNotOnboarded } from "../../../utils/auth/handleNotOnboarded";

const freelancerID: FC = () => {
  return <FreelancerContainer />;
};

export default freelancerID;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleNotOnboarded(user);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
