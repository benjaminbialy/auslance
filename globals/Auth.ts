import { createContext, Dispatch, SetStateAction } from "react";
import { UserData } from "../lib/supabase/getUserData";

interface AuthContext {
  authenticated: boolean;
  freelancerID?: number;
  employerID?: number;
  userData: UserData;
  setUserData?: Dispatch<SetStateAction<UserData>>;
}

const defaultAuthContext: AuthContext = {
  authenticated: false,
  userData: {
    user_id: "",
    email: "",
    first_name: "",
    last_name: "",
    isOnboarded: false,
  },
};

export const AuthContext = createContext(defaultAuthContext);
