import React, { FC, useState } from "react";
import { Login } from "./Login";

export const LoginContainer: FC = () => {
  const [email, setEmail] = useState("");

  return <Login {...{ email, setEmail }} />;
};
