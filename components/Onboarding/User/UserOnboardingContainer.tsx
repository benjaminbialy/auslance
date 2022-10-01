import Router from "next/router";
import React, { FC, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../globals/Auth";
import { UserOnboarding } from "./UserOnboarding";

export const UserOnboardingContainer: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { userData, setUserData, authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!authenticated) {
      Router.push("/onboarding/auth");
    } else if (
      userData.first_name != undefined &&
      userData.last_name != undefined
    ) {
      Router.push("/onboarding/create");
    }
  }, [userData, authenticated]);

  return (
    <UserOnboarding
      {...{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        setUserData,
      }}
    />
  );
};
