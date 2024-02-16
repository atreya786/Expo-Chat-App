import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsAuthenticated(false);
    // }, 3000);
  }, []);

  const login = async (email, password) => {
    try {
    } catch (error) {}
  };
  const logout = async (email, password) => {
    try {
    } catch (error) {}
  };
  const register = async (username, profileURL, email, password) => {
    try {
    } catch (error) {}
  };
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("AuthContext must be wrapped inside AuthProvider");
  }
  return value;
};
