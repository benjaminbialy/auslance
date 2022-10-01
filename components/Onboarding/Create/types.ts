import {
  Area,
  ExpertiseLevel,
  Visibility,
} from "../../../globalTypes/databaseTypes";

export type AccountType = "Freelancer" | "Employer" | null;
export type AccountDetails = {
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
  hourlyBudget: number;
  name: string;
  policies: string[];
};
export const defaultAccountDetails: AccountDetails = {
  hourlyRate: 0,
  bio: "",
  headline: "",
  location: "",
  timezone: "",
  linkedIn: "",
  gitHub: "",
  yearsOfExperience: 0,
  expertiseLevel: ExpertiseLevel.beginner,
  skills: [],
  areaOfWork: "engineering",
  visibility: Visibility.private,
  timeAvailable: 0,
  website: "",
  hourlyBudget: 0,
  name: "",
  policies: [],
};
