import Router from "next/router";
import React, { FC, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../globals/Auth";
import { Auth } from "./Auth";

export const AuthContainer: FC = () => {
  const [email, setEmail] = useState("");

  return <Auth {...{ email, setEmail }} />;
};
