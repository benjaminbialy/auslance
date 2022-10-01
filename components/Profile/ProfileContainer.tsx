import React, { FC, useState } from "react";
import { UserData } from "../../lib/supabase/getUserData";
import { Profile } from "./Profile";

interface Props {
  user: UserData;
}

export const ProfileContainer: FC<Props> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);

  return <Profile {...{ isLoading, setIsLoading, user }} />;
};
