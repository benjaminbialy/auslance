import { UserData } from "../../lib/supabase/getUserData";

export interface EmployerInterface {
  employer_id: string;
  user_id: string;
  hourlyBudget: number;
  bio: string;
  name: string;
  location: string;
  timezone: string;
  linkedIn?: string;
  timeAvailable: number;
  website?: string;
  policies: string[];
  users?: Pick<UserData, "first_name" | "last_name" | "email">;
}
