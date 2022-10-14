import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import axios from "axios";

export const useSession = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(supabase.auth.session());

  useEffect(() => {
    let mounted = true;
    async function getInitialSession() {
      const session = supabase.auth.session();

      if (mounted) {
        if (session) {
          setSession(session);
        }

        setLoading(false);
      }
    }

    getInitialSession();

    supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      const res = await axios.post("/api/setAuthCookie", {
        event: _event,
        session: session,
      });
      console.log(res);
    });
  }, []);

  return { session, loading };
};
