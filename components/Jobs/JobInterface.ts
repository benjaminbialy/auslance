import {
  Area,
  JobLength,
  JobStatus,
  RemoteLevel,
} from "../../globalTypes/databaseTypes";

export default interface JobInterface {
  jobID?: number;
  employerID?: string;
  freelancerID?: string;
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
  no_proposals: number;
  status: JobStatus;
}
