import { User } from "@supabase/supabase-js";
import { UserData } from "../../lib/supabase/getUserData";
import { getSupabaseServer } from "../../lib/supabase/supabaseServer";
import { handleRedirects } from "./handleRedirects";

export const handleProfileID = async (
  user: User,
  profileType: "freelancer" | "employer",
  profileID: string
) => {
  const { data, error } = await getSupabaseServer()
    .from("users")
    .select()
    .eq("user_id", user.id);

  if (error) return console.error(error);

  const userData: UserData = data[0];
  if (!userData.isOnboarded) {
    return handleRedirects(userData);
  }

  const profile = await getSupabaseServer()
    .from(`${profileType}s`)
    .select("*, users(*)")
    .eq(`${profileType}_id`, profileID);

  if (profile.error) return console.log(error);

  return { props: { profile: profile.data[0] } };
};
