import React, { FC } from "react";
import { Employer } from "./Employer";
import { EmployerInterface } from "./types";

interface Props {
  profile: EmployerInterface;
}

export const EmployerContainer: FC<Props> = ({ profile: employer }) => {
  return <Employer {...{ employer }} />;
};
