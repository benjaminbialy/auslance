import { useState } from "react";
import { supabase } from "./supabaseClient";

export const useDatabase = () => {
  const user = supabase.auth.user();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const write = async (table: string, values: object) => {
    setError("");
    setLoading(true);
    const { error } = await supabase.from(table).insert(values);
    setLoading(false);
    if (error) {
      console.log(error);
      setError(error.message);
      return false;
    }
    return true;
  };
  const update = async (
    table: string,
    values: object,
    eq: { column: string; value: string } = {
      column: "user_id",
      value: user.id,
    }
  ) => {
    setError("");
    setLoading(true);
    const { error } = await supabase
      .from(table)
      .update(values)
      .eq(eq.column, eq.value);
    setLoading(false);
    if (error) {
      console.log(error);
      setError(error.message);
      return false;
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

  return { loading, update, write, read, error, success };
};
