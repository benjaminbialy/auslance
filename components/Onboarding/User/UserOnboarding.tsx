import Router from "next/router";
import React, { Dispatch, FC, SetStateAction } from "react";

import { useDatabase } from "../../../lib/supabase/useDatabase";
import SimpleTextInput from "../../Inputs/SimpleTextInput";

interface Props {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
}

export const UserOnboarding: FC<Props> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
}) => {
  const { loading, error, update } = useDatabase();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const success = await update("users", {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
          });
          if (success) {
            Router.push("/onboarding/create");
          }
        }}
      >
        <SimpleTextInput
          placeholder="Your first name"
          value={firstName}
          setValue={setFirstName}
          disabled={loading}
          required={true}
        />
        <SimpleTextInput
          placeholder="Your last name"
          value={lastName}
          setValue={setLastName}
          disabled={loading}
          required={true}
        />
        <button disabled={loading} type="submit">
          {loading ? "Saving name..." : "Save"}
        </button>
        <div className="text-red-400">
          {error && "Couldn't save, try again"}
        </div>
      </form>
    </div>
  );
};
