import React, { FC } from "react";
import { useEmployer } from "../../../hooks/useEmployer";
import { EmployerDashboard } from "./EmployerDashboard";

interface Props {
  employer_id: string;
}

const EmployerDashboardContainer: FC<Props> = ({ employer_id }) => {
  const { employer, error, isLoading } = useEmployer(employer_id);

  return <EmployerDashboard {...{ isLoading, error, employer }} />;
};

export default EmployerDashboardContainer;
