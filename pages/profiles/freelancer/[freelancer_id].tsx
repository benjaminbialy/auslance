import React, { FC } from "react";
import { EmployerInterface } from "../../../components/Employer/types";
import { FreelancerContainer } from "../../../components/Freelancer/FreelancerContainer";
import { FreelancerInterface } from "../../../components/Freelancer/types";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { handleProfileID } from "../../../utils/auth/handleProfileID";

interface Props {
  profile: FreelancerInterface;
}

const freelancerID: FC<Props> = ({ profile }) => {
  return <FreelancerContainer profile={profile} />;
};

export default freelancerID;

export async function getServerSideProps({ query, req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleProfileID(user, "freelancer", query.freelancer_id);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
