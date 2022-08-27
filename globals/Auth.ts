import { createContext } from "react";

interface AuthContext {
  authenticated: boolean;
  freelancerID?: number;
  employerID?: number;
  isOnboarded: boolean;
  name: string;
}

const defaultAuthContext: AuthContext = {
  authenticated: false,
  isOnboarded: false,
  name: "",
};

export const AuthContext = createContext(defaultAuthContext);
