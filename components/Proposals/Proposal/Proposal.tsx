import React, { FC } from "react";
import { UserData } from "../../../lib/supabase/getUserData";
import { Proposal as ProposalInterface } from "../../Proposal/types";

interface Props {
  proposal: ProposalInterface;
  isInFreelancerView: boolean;
  user: UserData;
  isLoading: boolean;
}

export const Proposal: FC<Props> = ({
  isLoading,
  isInFreelancerView,
  user,
  proposal,
}) => {
  // 3 cases - allow users to switch accounts if they have both a freelancer and employer
  // account on this proposal. update isInFreelancerView if they decide.

  if (isLoading) return <div>Loading...</div>;

  if (isInFreelancerView)
    return <div>You&apos;re looking as the freelancer!</div>;

  return <div>You&apos;re looking as the receiver!</div>;
};
