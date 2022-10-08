import { handleRedirects } from "./handleRedirects";
import { User } from "@supabase/supabase-js";
import { UserData } from "../../lib/supabase/getUserData";
import { getSupabaseServer } from "../../lib/supabase/supabaseServer";

export const handleJobs = async (user: User) => {
  const { data, error } = await getSupabaseServer()
    .from("users")
    .select()
    .eq("user_id", user.id);

  if (error) console.error(error);

  const userData: UserData = data[0];
  if (!userData.isOnboarded) {
    return handleRedirects(userData);
  }

  const jobs = await getSupabaseServer().from("jobs").select().limit(20);
  if (jobs.error) return { props: { user: userData, jobs: [] } };

  return { props: { user: userData, jobs: jobs.data } };
};
