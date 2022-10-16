import React, { FC, useState } from "react";
import { useToggle } from "../../../hooks/useToggle";
import { UserData } from "../../../lib/supabase/getUserData";
import { Proposal as ProposalInterface } from "../../Proposal/types";
import { Proposal } from "./Proposal";

interface Props {
  proposal: ProposalInterface;
  isFreelancer: boolean;
  user: UserData;
}
export const ProposalContainer: FC<Props> = ({
  proposal,
  isFreelancer,
  user,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isShown: isInFreelancerView } = useToggle(isFreelancer);

  return <Proposal {...{ isLoading, proposal, isInFreelancerView, user }} />;
};
