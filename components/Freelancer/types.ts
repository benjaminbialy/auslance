import {
  Area,
  ExpertiseLevel,
  Visibility,
} from "../../globalTypes/databaseTypes";
import { UserData } from "../../lib/supabase/getUserData";

export interface FreelancerInterface {
  freelancer_id: string;
  hourlyRate: number;
  bio: string;
  headline: string;
  location: string;
  timezone: string;
  linkedIn?: string;
  gitHub?: string;
  yearsOfExperience: number;
  expertiseLevel: ExpertiseLevel;
  skills: string[];
  areaOfWork: Area;
  visibility: Visibility;
  timeAvailable: number;
  website?: string;
  users?: Pick<UserData, "first_name" | "last_name" | "email">;
}
