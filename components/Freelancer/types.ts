import { UserData } from "../../lib/supabase/getUserData";

export enum ExpertiseLevel {
  beginner = "beginner",
  intermediate = "intermediate",
  expert = "expert",
}

export type Area = "sales" | "engineering" | "marketing" | "design";
export enum Visibility {
  private = "private",
  public = "public",
}

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
