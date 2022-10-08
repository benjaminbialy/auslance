import { createClient } from "@supabase/supabase-js";

export const getSupabaseServer = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
  return supabase;
};
