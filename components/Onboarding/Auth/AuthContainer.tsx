import React, { FC, FormEvent, useState } from "react";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { Auth } from "./Auth";

export const AuthContainer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await supabase.auth.signIn({
        email: email,
      });
      alert("Check your email for the login link!");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return <Auth {...{ error, loading, email, setEmail, onSubmit }} />;
};
