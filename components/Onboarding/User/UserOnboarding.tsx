import { Input } from "@mui/material";
import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";

interface Props {
  error: boolean;
  loading: boolean;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export const UserOnboarding: FC<Props> = ({
  loading,
  error,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  onSubmit,
}) => {
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input
          placeholder="Your first name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={loading}
        />
        <Input
          placeholder="Your last name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={loading}
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
