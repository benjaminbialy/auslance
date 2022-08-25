import React, { FC, useState } from "react";
import { Auth } from "./Auth";

export const AuthContainer: FC = () => {
  const [loading, setLoading] = useState(false);

  return <Auth {...{ loading }} />;
};
