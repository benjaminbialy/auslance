import { User } from "@supabase/supabase-js";
import { UserData } from "../../lib/supabase/getUserData";
import { getSupabaseServer } from "../../lib/supabase/supabaseServer";
import { handleRedirects } from "./handleRedirects";

export const handleProfile = async (user: User) => {
  const { data, error } = await getSupabaseServer()
    .from("users")
    .select("*, freelancers(*), employers(*)")
    .eq("user_id", user.id);

  if (error) console.error(error);

  const userData: UserData = data[0];
  if (!userData.isOnboarded) {
    return handleRedirects(userData);
  }

  return { props: { user: userData } };
};
