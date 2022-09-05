import React, { FC, useState } from "react";
import { Auth } from "./Auth";

export const AuthContainer: FC = () => {
  const [email, setEmail] = useState("");

  return <Auth {...{ email, setEmail }} />;
};
