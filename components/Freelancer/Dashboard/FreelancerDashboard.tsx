import React, { FC } from "react";
import { Error } from "../../../globalTypes/error";
import { getFullName } from "../../../utils/getFullName";
import { ProposalPreview } from "../../Proposal/ProposalPreview";
import { Proposal } from "../../Proposal/types";
import { FreelancerInterface } from "../types";

interface Props {
  isLoading: boolean;
  freelancer: FreelancerInterface;
  error: Error;
}

export const FreelancerDashboard: FC<Props> = ({
  isLoading,
  error,
  freelancer,
}) => {
  console.log(freelancer);
  if (isLoading) return <div>Loading...</div>;
  if (error.error) return <div>{JSON.stringify(error)}</div>;
  return (
    <div>
      <h1>Welcome, {getFullName(freelancer)}!</h1>
      <div>Proposals</div>
      <div>
        {freelancer.proposals.map((proposal: Proposal) => (
          <ProposalPreview
            key={`proposal-${proposal.proposal_id}`}
            {...{ proposal }}
          />
        ))}
      </div>
    </div>
  );
};
