import { User } from "@supabase/supabase-js";
import { UserData } from "../../lib/supabase/getUserData";
import { getSupabaseServer } from "../../lib/supabase/supabaseServer";
import { handleRedirects } from "./handleRedirects";

export const handleIsEmployer = async (user: User) => {
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

  if (employer.error) return console.log(error);

  if (employer.data.length < 1) {
    return {
      props: {},
      redirect: { permanent: false, destination: "/profiles" },
    };
  }

  return { props: { employer: employer.data[0] } };
};
