import { ExpertiseLevel, Visibility } from "../../globalTypes/databaseTypes";
import { FreelancerInterface } from "./types";

export const defaultFreelancer: FreelancerInterface = {
  freelancer_id: "",
  hourlyRate: 0,
  bio: "",
  headline: "",
  location: "",
  timezone: "",
  linkedIn: "",
  gitHub: "",
  yearsOfExperience: 0,
  expertiseLevel: ExpertiseLevel.beginner,
  skills: [""],
  areaOfWork: "engineering",
  visibility: Visibility.public,
  timeAvailable: 0,
  website: "",
  users: {
    first_name: "",
    last_name: "",
    email: "",
  },
};
