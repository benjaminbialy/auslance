import Router from "next/router";
import React, { FC, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../globals/Auth";
import { Auth } from "./Auth";

export const AuthContainer: FC = () => {
  const [email, setEmail] = useState("");
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated) Router.push("/onboarding/user");
  }, []);

  return <Auth {...{ email, setEmail }} />;
};
