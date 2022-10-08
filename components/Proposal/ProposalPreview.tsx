import Link from "next/link";
import React, { FC } from "react";
import { capitaliseFirstLetter } from "../../utils/capitaliseFirstLetter";
import { centsToDollars } from "../../utils/moneyConversions";
import { FlexWrapper } from "../Wrappers/FlexWrapper";
import { Proposal } from "./types";

interface Props {
  proposal: Proposal;
}

export const ProposalPreview: FC<Props> = ({ proposal }) => {
  const job = proposal?.jobs;
  return (
    <div className="border-2 border-slate-200 p-2 my-2 mx-10">
      <FlexWrapper isColumn>
        <div>{capitaliseFirstLetter(proposal.proposal)}</div>
        <Link href={`/jobs/${job.job_id}`}>
          <a className="text-blue-600">Title: {job.title}</a>
        </Link>
        <div>
          {job.employers.name}, {capitaliseFirstLetter(job.location)}
        </div>
      </FlexWrapper>
      <Link href={`/proposals/${proposal.proposal_id}`}>
        <a className="text-green-600">Your pitch:</a>
      </Link>
      <div>
        ${centsToDollars(proposal.cents_per_hour)} per hour or $
        {centsToDollars(proposal.full_price)} in total
      </div>
      <div>Subject line: {proposal.subject_line}</div>
      <div>Pitch: {proposal.content}</div>
    </div>
  );
};
