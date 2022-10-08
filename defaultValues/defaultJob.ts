import {
  JobLength,
  JobStatus,
  RemoteLevel,
} from "./../globalTypes/databaseTypes";
import JobInterface from "../components/Jobs/JobInterface";

export const defaultJob: JobInterface = {
  title: "",
  location: "melbourne",
  description: "",
  skills: [],
  hours_per_week: 0,
  area: "sales",
  length: JobLength.short,
  remote_level: RemoteLevel.none,
  is_hourly: false,
  max_cents_per_hour: 0,
  full_price: 0,
  status: JobStatus.posted,
};
