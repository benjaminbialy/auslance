import React, { FC, useState } from "react";
import { CreateAccount } from "./CreateAccount";

export const CreateAccountContainer: FC = () => {
  const [loading, setLoading] = useState(false);

  return <CreateAccount {...{ loading }} />;
};
