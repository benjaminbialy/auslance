import React, { FC } from "react";
import { useFreelancer } from "../../../hooks/useFreelancer";
import { FreelancerDashboard } from "./FreelancerDashboard";

interface Props {
  freelancer_id: number;
}

export const FreelancerDashboardContainer: FC<Props> = ({ freelancer_id }) => {
  const { isLoading, freelancer, error } = useFreelancer(freelancer_id);
  return <FreelancerDashboard {...{ isLoading, freelancer, error }} />;
};
