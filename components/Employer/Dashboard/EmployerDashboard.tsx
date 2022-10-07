import React, { Dispatch, FC, SetStateAction } from "react";

interface Props {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const EmployerDashboard: FC<Props> = ({ isLoading, setIsLoading }) => {
  return <div>EmployerDashboard</div>;
};
