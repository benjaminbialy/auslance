import { User } from "@supabase/supabase-js";
import { UserData } from "../../lib/supabase/getUserData";
import { getSupabaseServer } from "../../lib/supabase/supabaseServer";
import { handleRedirects } from "./handleRedirects";

export const handleIsJobCreator = async (user: User, job_id: string) => {
  const { data, error } = await getSupabaseServer()
    .from("users")
    .select()
    .eq("user_id", user.id);

  if (error) return console.error(error);

  const userData: UserData = data[0];
  if (!userData.isOnboarded) {
    return handleRedirects(userData);
  }

  const employer = await getSupabaseServer()
    .from(`employers`)
    .select("*, users(*)")
    .eq(`user_id`, user.id);

  if (employer.error) return console.log(employer.error);

  if (employer.data.length < 1) {
    return {
      props: {},
      redirect: { permanent: false, destination: "/profiles" },
    };
  }

  const jobs = await getSupabaseServer()
    .from(`jobs`)
    .select("*")
    .match({ employer_id: employer.data[0].employer_id, job_id: job_id });

  if (jobs.error) return console.log(jobs.error);

  return { props: { employer: employer.data[0], jobs: jobs.data } };
};
