import {
  Area,
  JobLength,
  JobStatus,
  RemoteLevel,
} from "../../globalTypes/databaseTypes";
import { EmployerInterface } from "../Employer/types";

export default interface JobInterface {
  job_id?: number;
  employer_id?: number;
  freelancer_id?: number;
  area: Area;
  length: JobLength;
  remote_level: RemoteLevel;
  is_hourly: boolean;
  max_cents_per_hour: number;
  full_price: number;
  title: string;
  location: string;
  description: string;
  skills: Array<string>;
  hours_per_week: number;
  time_posted?: number;
  no_proposals?: number;
  status: JobStatus;
  employers?: EmployerInterface;
}
