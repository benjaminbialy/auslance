import { useRouter } from "next/router";
import React, { FC, FormEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../globals/Auth";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { UserOnboarding } from "./UserOnboarding";

export const UserOnboardingContainer: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { userData, setUserData } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (userData.first_name != undefined && userData.last_name != undefined) {
      router.push("/onboarding/create");
    }
  }, [userData, router]);

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
