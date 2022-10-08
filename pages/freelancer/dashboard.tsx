import React, { FC } from "react";
import { FreelancerDashboardContainer } from "../../components/Freelancer/Dashboard/FreelancerDashboardContainer";
import { FreelancerInterface } from "../../components/Freelancer/types";
import { supabase } from "../../lib/supabase/supabaseClient";
import { handleIsFreelancer } from "../../utils/auth/handleIsFreelancer";

interface Props {
  freelancer: FreelancerInterface;
}

const dashboard: FC<Props> = ({ freelancer }) => {
  return (
    <FreelancerDashboardContainer freelancer_id={freelancer.freelancer_id} />
  );
};

export default dashboard;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleIsFreelancer(user);
  }
  return {
    props: { user },
    redirect: { destination: "/login", permanent: false },
  };
}
