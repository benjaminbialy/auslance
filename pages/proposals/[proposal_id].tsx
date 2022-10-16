import { FC } from "react";
import { Proposal } from "../../components/Proposal/types";
import { ProposalContainer } from "../../components/Proposals/Proposal/ProposalContainer";
import { UserData } from "../../lib/supabase/getUserData";
import { supabase } from "../../lib/supabase/supabaseClient";
import { handleProposalPage } from "../../utils/auth/handleProposalPage";

interface Props {
  proposal: Proposal;
  isFreelancer: boolean;
  user: UserData;
}

const proposal_id: FC<Props> = ({ proposal, isFreelancer, user }) => {
  return <ProposalContainer {...{ proposal, isFreelancer, user }} />;
};

export default proposal_id;

export async function getServerSideProps({ query, req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req, res);
  if (user) {
    return handleProposalPage(user, query.proposal_id);
  }
  return {
    props: { user },
    redirect: { destination: "/login", permanent: false },
  };
}
