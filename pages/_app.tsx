import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { AppProps } from "../node_modules/next/app";
import { AuthContext } from "../globals/Auth";
import { useSession } from "../lib/supabase/useSession";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabaseClient";
import { getUserData, UserData } from "../lib/supabase/getUserData";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { loading: isLoading, session } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    user_id: "",
    email: "",
    first_name: "",
    last_name: "",
    isOnboarded: false,
  });

  useEffect(() => {
    const handleLoad = async () => {
      if (session) {
        const data = await getUserData(supabase.auth.user().id);
        if (data) {
          setUserData({ ...data });
          if (!data.isOnboarded) {
            if (data.first_name.trim() == "" || data.last_name.trim() == "") {
              router.push("/onboarding/user");
            } else {
              router.push("/onboarding/create");
            }
          }
        }
      }
    };

    handleLoad();
  }, [session, router]);

  const authContext = {
    authenticated: session ? true : false,
    userData: userData,
    setUserData: setUserData,
  };

  if (isLoading) {
    return (
      <div>
        <NavBar />
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavBar />
        <Component {...pageProps} />
      </AuthContext.Provider>
    );
  }
}

export default MyApp;
