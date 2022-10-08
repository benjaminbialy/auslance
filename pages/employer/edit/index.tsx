import React, { FC } from "react";
import { EditEmployerContainer } from "../../../components/Employer/Edit/EditEmployerContainer";
import { EmployerInterface } from "../../../components/Employer/types";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { handleIsEmployer } from "../../../utils/auth/handleIsEmployer";

interface Props {
  employer: EmployerInterface;
}

const index: FC<Props> = ({ employer }) => {
  return <EditEmployerContainer {...{ employer }} />;
};

export default index;

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleIsEmployer(user);
  }
  return {
    props: { user },
    redirect: { destination: "/login", permanent: false },
  };
}
