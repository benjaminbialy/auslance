import { useState } from "react";
import { supabase } from "./supabaseClient";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const signUp = async (email: string) => {
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email: email });
    setLoading(false);
    if (error) {
      console.log(error);
      return setError(error.message);
    }
    setSuccess(true);
  };
  return { loading, signUp, error, success };
};
