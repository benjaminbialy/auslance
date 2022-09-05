import { useState } from "react";
import { supabase } from "./supabaseClient";

export const useDatabase = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = async (table: string, values: object, user_id: string) => {
    setError("");
    setLoading(true);
    const { error } = await supabase
      .from(table)
      .update(values)
      .eq("user_id", user_id);
    setLoading(false);
    if (error) {
      console.log(error);
      return setError(error.message);
    }
    return true;
  };

  return { loading, update, error, success };
};
