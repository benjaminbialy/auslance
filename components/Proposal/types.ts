import { ProposalStatus } from "../../globalTypes/databaseTypes";
import JobInterface from "../Jobs/JobInterface";

export interface Proposal {
  proposal_id?: number;
  freelancer_id?: number;
  employer_id?: number;
  job_id?: number;
  proposal?: ProposalStatus;
  subject_line: string;
  content: string;
  cents_per_hour: number;
  full_price: number;
  time_sent?: number;
  was_edited?: boolean;
  jobs?: JobInterface;
}
