import { handleRedirects } from "./handleRedirects";
import { User } from "@supabase/supabase-js";
import { UserData } from "../../lib/supabase/getUserData";
import { getSupabaseServer } from "../../lib/supabase/supabaseServer";

export const protectRoute = async (user: User) => {
  const { data, error } = await getSupabaseServer()
    .from("users")
    .select()
    .eq("user_id", user.id);

  if (error) console.error(error);

  const userData: UserData = data[0];
  return handleRedirects(userData);
};
