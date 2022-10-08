import { handleRedirects } from "./handleRedirects";
import { User } from "@supabase/supabase-js";
import { UserData } from "../../lib/supabase/getUserData";
import { getSupabaseServer } from "../../lib/supabase/supabaseServer";

export const handleJob = async (user: User, job_id: number) => {
  const { data, error } = await getSupabaseServer()
    .from("users")
    .select()
    .eq("user_id", user.id);

  if (error) console.error(error);

  const userData: UserData = data[0];
  if (!userData.isOnboarded) {
    return handleRedirects(userData);
  }

  const job = await getSupabaseServer()
    .from("jobs")
    .select(`*, employers(*)`)
    .eq("job_id", job_id);

  if (job.error) return { props: { user: userData, job: {} } };

  return { props: { user: userData, job: job.data[0] } };
};
