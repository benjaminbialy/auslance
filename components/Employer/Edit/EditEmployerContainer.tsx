import React, { FC, useState } from "react";
import { EmployerInterface } from "../types";
import { EditEmployer } from "./EditEmployer";

interface Props {
  employer: EmployerInterface;
}

export const EditEmployerContainer: FC<Props> = ({ employer }) => {
  const [isLoading, setIsLoading] = useState(false);

  return <EditEmployer {...{ isLoading, employer }} />;
};
