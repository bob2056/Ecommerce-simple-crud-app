'use client';

import { createContext } from "react";
import { IAuthContext } from "../types/Auth";

const AuthContext = createContext<IAuthContext>({
  loggedInUser: null,
  login: async() => {},
  getLoggedInUser: async() => {}
})

export default AuthContext