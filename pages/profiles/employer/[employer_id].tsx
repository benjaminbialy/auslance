import React, { FC } from "react";
import { EmployerContainer } from "../../../components/Employer/EmployerContainer";
import { EmployerInterface } from "../../../components/Employer/types";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { handleProfileID } from "../../../utils/auth/handleProfileID";

interface Props {
  profile: EmployerInterface;
}

const EmployerID: FC<Props> = ({ profile }) => {
  return <EmployerContainer {...{ profile }} />;
};

export default EmployerID;

export async function getServerSideProps({ query, req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleProfileID(user, "employer", query.employer_id);
  }
  return { props: {}, redirect: { destination: "/login", permanent: false } };
}
