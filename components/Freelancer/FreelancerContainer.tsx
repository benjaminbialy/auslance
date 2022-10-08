import React, { FC } from "react";
import { Freelancer } from "./Freelancer";
import { FreelancerInterface } from "./types";

interface Props {
  profile: FreelancerInterface;
}

export const FreelancerContainer: FC<Props> = ({ profile: freelancer }) => {
  return <Freelancer {...{ freelancer }} />;
};
