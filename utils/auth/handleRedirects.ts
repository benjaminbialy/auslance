import { UserData } from "../../lib/supabase/getUserData";

export const handleRedirects = (userData: UserData) => {
  if (userData.isOnboarded) {
    return {
      props: { user: userData },
      redirect: { permanent: false, destination: "/profiles" },
    };
  } else if (
    userData.first_name === undefined ||
    userData.first_name === undefined
  ) {
    return {
      props: { user: userData },
      redirect: { permanent: false, destination: "/onboarding/user" },
    };
  } else
    return {
      props: { user: userData },
      redirect: { permanent: false, destination: "/onboarding/create" },
    };
};
