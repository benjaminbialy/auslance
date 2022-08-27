import React, { FC, useState } from "react";
import { UserOnboarding } from "./UserOnboarding";

export const UserOnboardingContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  // enter first name
  // enter last name
  // redirect to Create
  return <UserOnboarding {...{ loading }} />;
};
