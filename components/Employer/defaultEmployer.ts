import { EmployerInterface } from "./types";

export const defaultEmployer: EmployerInterface = {
  user_id: "",
  hourly_budget: 0,
  bio: "",
  name: "",
  location: "",
  timezone: "",
  linked_in: "",
  policies: [],
  time_available: 0,
  website: "",
  users: {
    first_name: "",
    last_name: "",
    email: "",
  },
  jobs: [],
};
