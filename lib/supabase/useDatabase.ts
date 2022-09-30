import { useState } from "react";
import { supabase } from "./supabaseClient";

export const useDatabase = () => {
  const user = supabase.auth.user();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = async (table: string, values: object) => {
    setError("");
    setLoading(true);
    const { error } = await supabase
      .from(table)
      .update(values)
      .eq("user_id", user.id);
    setLoading(false);
    if (error) {
      console.log(error);
      return setError(error.message);
    }
    return true;
  };
  const read = async (
    table: string,
    select: string = "*",
    eq: { column: string; value: string } = {
      column: "user_id",
      value: user.id,
    }
  ) => {
    const { data, error } = await supabase
      .from(table)
      .select(select)
      .eq(eq.column, eq.value);
    if (error) setError(error.message);

    return { data, error };
  };

  return { loading, update, read, error, success };
};
