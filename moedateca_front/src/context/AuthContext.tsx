import React, { createContext, useContext, useState } from "react";
import api from "../Api";

interface AuthContextProps {
  authenticated?: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);

  const login = async () => {
    const {
      data: { token },
    } = await api.post("/authenticate");

    localStorage.setItem("token", JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  };

  const logout = async () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
