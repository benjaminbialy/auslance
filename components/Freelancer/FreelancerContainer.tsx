import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { useFreelancer } from "../../hooks/useFreelancer";
import { Freelancer } from "./Freelancer";
import { FreelancerInterface } from "./types";

interface Props {
  profile: FreelancerInterface;
}

export const FreelancerContainer: FC<Props> = ({ profile: freelancer }) => {
  return <Freelancer {...{ freelancer }} />;
};
