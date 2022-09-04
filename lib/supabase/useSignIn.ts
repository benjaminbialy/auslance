import { useState } from "react";
import { supabase } from "./supabaseClient";

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const signIn = async (email: string) => {
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signIn({ email: email });
    setLoading(false);
    if (error) {
      console.log(error);
      return setError(error.message);
    }
    setSuccess(true);
  };
  return { loading, signIn, error, success };
};
