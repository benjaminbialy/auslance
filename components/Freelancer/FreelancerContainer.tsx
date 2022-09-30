import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { useFreelancer } from "../../hooks/useFreelancer";
import { Freelancer } from "./Freelancer";

export const FreelancerContainer: FC = () => {
  const { query } = useRouter();
  const { freelancer, isLoading, error } = useFreelancer(
    query.freelancer_id as string
  );

  return <Freelancer {...{ isLoading, freelancer, error }} />;
};
