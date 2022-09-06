import { supabase } from "./supabaseClient";

export interface UserData {
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
  isOnboarded: boolean;
}

export const getUserData = async (userID: string): Promise<UserData | void> => {
  const { data, error } = await supabase
    .from("users")
    .select(
      `*,
    employers( employer_id ),
    freelancers( freelancer_id )`
    )
    .eq("user_id", userID);

  if (error) return console.error(error);

  return data[0];
};
