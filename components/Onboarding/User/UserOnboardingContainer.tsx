import Router from "next/router";
import React, { FC, FormEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../globals/Auth";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { UserOnboarding } from "./UserOnboarding";

export const UserOnboardingContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { name, setName } = useContext(AuthContext);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await supabase
        .from("users")
        .insert({ first_name: firstName, last_name: lastName });
      setName(firstName + " " + lastName);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (name.trim() != "") {
      Router.push("/onboarding/create");
    }
  }, [name]);

  // redirect to Create
  return (
    <UserOnboarding
      {...{
        loading,
        error,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        onSubmit,
      }}
    />
  );
};
