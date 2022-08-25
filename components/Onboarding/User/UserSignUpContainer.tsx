import React, { FC, useState } from "react";
import { UserSignUp } from "./UserSignUp";

export const UserSignUpContainer: FC = () => {
  const [loading, setLoading] = useState(false);

  return <UserSignUp {...{ loading }} />;
};
