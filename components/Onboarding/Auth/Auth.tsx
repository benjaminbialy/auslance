import { Input } from "@mui/material";
import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";
import { supabase } from "../../../lib/supabase/supabaseClient";

interface Props {
  error: boolean;
  loading: boolean;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export const Auth: FC<Props> = ({
  error,
  loading,
  email,
  setEmail,
  onSubmit,
}) => {
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <button disabled={loading} type="submit">
          {loading ? "Signing up..." : "Sign up"}
        </button>
        <div className="text-red-400">
          {error && "Error signing up, check the email you entered!"}
        </div>
      </form>
    </div>
  );
};
