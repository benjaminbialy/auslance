import { UserData } from "../../lib/supabase/getUserData";
import JobInterface from "../Jobs/JobInterface";

export interface EmployerInterface {
  employer_id?: number;
  user_id: string;
  hourly_budget: number;
  bio: string;
  name: string;
  location: string;
  timezone: string;
  linked_in?: string;
  time_available: number;
  website?: string;
  policies: string[];
  users?: Pick<UserData, "first_name" | "last_name" | "email">;
  jobs?: JobInterface[];
}
