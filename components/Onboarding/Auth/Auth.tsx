import Link from "next/link";
import React, { Dispatch, FC, SetStateAction } from "react";
import { useSignIn } from "../../../lib/supabase/useSignIn";
import SimpleTextInput from "../../Inputs/SimpleTextInput";

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const Auth: FC<Props> = ({ email, setEmail }) => {
  const { loading, error, success, signIn } = useSignIn();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn(email);
        }}
      >
        <h3>Sign in using Magic Link</h3>
        <SimpleTextInput
          {...{
            value: email,
            setValue: setEmail,
            placeholder: "Email",
            disabled: loading,
          }}
        />
        <button type="submit">{loading ? "Loading..." : "Sign up"}</button>
        <Link href={"/login"}>
          <a>Have an account? Click here!</a>
        </Link>
        <div>{error}</div>
        <div>{success && "Magic link sent! Go find it!"}</div>
      </form>
    </div>
  );
};
