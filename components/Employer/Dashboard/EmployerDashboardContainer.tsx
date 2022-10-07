import React, { FC } from "react";
import { EmployerInterface } from "../types";

interface Props {
  employer: EmployerInterface;
}

const EmployerDashboardContainer: FC<Props> = ({ employer }) => {
  console.log(employer);
  return <div>EmployerDashboardContainer</div>;
};

export default EmployerDashboardContainer;
