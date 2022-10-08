import { User } from "@supabase/supabase-js";
import { UserData } from "../../lib/supabase/getUserData";
import { getSupabaseServer } from "../../lib/supabase/supabaseServer";
import { handleRedirects } from "./handleRedirects";

export const handleIsFreelancer = async (user: User) => {
  try {
    const { data } = await getSupabaseServer()
      .from("users")
      .select()
      .eq("user_id", user.id);

    const userData: UserData = data[0];
    if (!userData.isOnboarded) {
      return handleRedirects(userData);
    }

    const freelancer = await getSupabaseServer()
      .from(`freelancers`)
      .select("*, users(*)")
      .eq(`user_id`, user.id);

    if (freelancer.data.length < 1) {
      return {
        props: {},
        redirect: { permanent: false, destination: "/profiles" },
      };
    }

    return { props: { freelancer: freelancer.data[0] } };
  } catch (error) {
    return console.log(error);
  }
};
