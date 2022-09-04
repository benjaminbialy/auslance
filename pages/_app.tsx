import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { AppProps } from "../node_modules/next/app";
import { AuthContext } from "../globals/Auth";
import { useSession } from "../lib/supabase/useSession";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabaseClient";
import { getUserData, UserData } from "../lib/supabase/getUserData";

function MyApp({ Component, pageProps }: AppProps) {
  const { loading: isLoading, session } = useSession();
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
        console.log(data);
        if (data) setUserData({ ...data });
      }
    };

    handleLoad();
  }, [session]);

  if (isLoading) {
    return (
      <div>
        <NavBar />
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <AuthContext.Provider
        value={{
          authenticated: session ? true : false,
          isOnboarded: userData.isOnboarded,
          name:
            (userData.first_name == null ? "" : userData.first_name) +
            " " +
            (userData.last_name == null ? "" : userData.last_name),
        }}
      >
        <NavBar />
        <Component {...pageProps} />
      </AuthContext.Provider>
    );
  }
}

export default MyApp;
