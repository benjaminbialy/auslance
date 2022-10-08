import React, { FC } from "react";
import { EmployerInterface } from "../types";

interface Props {
  employer: EmployerInterface;
  isLoading: boolean;
}

export const EditEmployer: FC<Props> = ({ isLoading, employer }) => {
  return <div>{JSON.stringify(employer)}</div>;
};
