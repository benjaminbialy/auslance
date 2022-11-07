import {
  Area,
  ExpertiseLevel,
  Visibility,
} from "../../globalTypes/databaseTypes";
import { UserData } from "../../lib/supabase/getUserData";
import JobInterface from "../Jobs/JobInterface";
import { SavedJob } from "../Jobs/types";
import { Proposal } from "../Proposal/types";

export interface FreelancerInterface {
  freelancer_id?: number;
  hourly_rate: number;
  bio: string;
  headline: string;
  location: string;
  timezone: string;
  linkedin?: string;
  github?: string;
  years_of_experience: number;
  expertise_level: ExpertiseLevel;
  skills: string[];
  area_of_work: Area;
  visibility: Visibility;
  time_available: number;
  website?: string;
  users?: Pick<UserData, "first_name" | "last_name" | "email">;
  jobs?: JobInterface[];
  proposals?: Proposal[];
  saved_jobs?: SavedJob[];
}
