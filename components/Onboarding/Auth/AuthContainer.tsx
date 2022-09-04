import React, { FC, FormEvent, useState } from "react";
import { supabase } from "../../../lib/supabase/supabaseClient";
import { Auth } from "./Auth";

export const AuthContainer: FC = () => {
  const [email, setEmail] = useState("");

  return <Auth {...{ email, setEmail }} />;
};
