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
}

//hourlyBudget: 0,
// bio: "",
// name: "",
// location: "",
// timezone: "",
// timeAvailable: 0,
// policies: [],
