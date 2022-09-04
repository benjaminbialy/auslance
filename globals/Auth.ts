import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContext {
  authenticated: boolean;
  freelancerID?: number;
  employerID?: number;
  isOnboarded: boolean;
  name: string;
  setName?: Dispatch<SetStateAction<string>>;
}

const defaultAuthContext: AuthContext = {
  authenticated: false,
  isOnboarded: false,
  name: "",
};

export const AuthContext = createContext(defaultAuthContext);
