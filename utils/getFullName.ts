import { FreelancerInterface } from "../components/Freelancer/types";
import { EmployerInterface } from "../components/Employer/types";

export const getFullName = (
  account: FreelancerInterface | EmployerInterface
): string => {
  return `${account.users.first_name} ${account.users.last_name}`;
};
