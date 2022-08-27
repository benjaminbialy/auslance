import { createContext } from "react";

interface AuthContext {
  authenticated: boolean;
  freelancerID: string;
  employerID: string;
}

const defaultAuthContext: AuthContext = {
  authenticated: false,
  freelancerID: "",
  employerID: "",
};

export const AuthContext = createContext(defaultAuthContext);
