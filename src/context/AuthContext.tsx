// src/context/AuthContext.tsx (Using Environment Variable)
import React, { createContext, useState, type ReactNode, useEffect } from 'react';

// 1. Get the password from the environment variable.
const SECRET_PASSWORD = import.meta.env.VITE_APP_PASSWORD;

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('isAuthenticated') === 'true';
  });

  const login = (password: string): boolean => {
    // 2. Add a check to ensure the variable is actually set.
    if (!SECRET_PASSWORD) {
      console.error("FATAL: VITE_APP_PASSWORD is not set in your .env file. Please create it and restart the server.");
      return false;
    }

    if (password === SECRET_PASSWORD) {
      sessionStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'isAuthenticated') {
        setIsAuthenticated(event.newValue === 'true');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};