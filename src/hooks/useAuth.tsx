
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
} | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => false,
  logout: () => {},
  isAuthenticated: false
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find((u: any) => 
      u.email === email && u.password === password
    );
    
    if (foundUser) {
      const userInfo = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email
      };
      
      localStorage.setItem("currentUser", JSON.stringify(userInfo));
      setUser(userInfo);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
