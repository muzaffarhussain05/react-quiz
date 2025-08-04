import { Component, createContext, useContext, useState } from 'react';

// 1. Create the context
const AppContext = createContext(undefined);

// 2. Create the provider
export const AppProvider = ({ children }) => {
  // Example state variables
  const [theme, setTheme] = useState('light'); // light or dark
  const [user, setUser] = useState(null); // current logged-in user

  // Example function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const login = (name) => {
    setUser({ name });
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    theme,
    toggleTheme,
    user,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};


// use the context in other Components
// import { useApp } from './AppContext';

// const App = () => {
//   const { theme, toggleTheme, user, login, logout } = useApp();