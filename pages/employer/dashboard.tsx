import React, { FC } from "react";
import EmployerDashboardContainer from "../../components/Employer/Dashboard/EmployerDashboardContainer";
import { EmployerInterface } from "../../components/Employer/types";
import { supabase } from "../../lib/supabase/supabaseClient";
import { handleIsEmployer } from "../../utils/auth/handleIsEmployer";

interface Props {
  employer: EmployerInterface;
}

const dashboard: FC<Props> = ({ employer }) => {
  return <EmployerDashboardContainer {...{ employer }} />;
};

export default dashboard;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleIsEmployer(user);
  }
  return {
    props: { employer: user },
    redirect: { destination: "/login", permanent: false },
  };
}
