import React, { FC, useState } from "react";
import { UserOnboarding } from "./UserOnboarding";

export const UserOnboardingContainer: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <UserOnboarding
      {...{
        firstName,
        setFirstName,
        lastName,
        setLastName,
      }}
    />
  );
};
