import { ExpertiseLevel, Visibility } from "../../globalTypes/databaseTypes";
import { FreelancerInterface } from "./types";

export const defaultFreelancer: FreelancerInterface = {
  hourly_rate: 0,
  bio: "",
  headline: "",
  location: "",
  timezone: "",
  linkedin: "",
  github: "",
  years_of_experience: 0,
  expertise_level: ExpertiseLevel.beginner,
  skills: [""],
  area_of_work: "engineering",
  visibility: Visibility.public,
  time_available: 0,
  website: "",
  users: {
    first_name: "",
    last_name: "",
    email: "",
  },
};
