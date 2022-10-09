import { User } from "@supabase/supabase-js";
import { Proposal } from "../../components/Proposal/types";
import { UserData } from "../../lib/supabase/getUserData";
import { getSupabaseServer } from "../../lib/supabase/supabaseServer";
import { handleRedirects } from "./handleRedirects";

export const handleProposalPage = async (user: User, proposal_id: string) => {
  try {
    const { data } = await getSupabaseServer()
      .from("users")
      .select("*, freelancers(freelancer_id), employers(employer_id)")
      .eq("user_id", user.id);

    const userData: UserData = data[0];
    if (!userData.isOnboarded) {
      return handleRedirects(userData);
    }

    // if logged in check if the user is an employer or proposals on the proposal
    const proposal = await getSupabaseServer()
      .from(`proposals`)
      .select("*, freelancers(*), employers(*)")
      .eq("proposal_id", proposal_id);

    if (proposal.data.length < 1) {
      return {
        props: {},
        redirect: { permanent: false, destination: "/jobs" },
      };
    }

    return handleIsUserOnProposal(proposal.data[0], userData);
  } catch (error) {
    return console.log(error);
  }
};

const handleIsUserOnProposal = (proposal: Proposal, user: UserData) => {
  if (proposal.employer_id === user?.employers?.[0].employer_id) {
    return { props: { proposal: proposal, isFreelancer: false, user: user } };
  } else if (proposal.freelancer_id === user?.freelancers?.[0].freelancer_id) {
    return { props: { proposal: proposal, isFreelancer: true, user: user } };
  }
  return {
    props: {},
    redirect: { permanent: false, destination: `/jobs/${proposal.job_id}` },
  };
};
