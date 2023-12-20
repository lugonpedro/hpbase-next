"use client";
import { createContext, useEffect, useState } from "react";

export type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

interface DarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeContext = createContext({} as DarkModeContextType);

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    let darkOn = localStorage.getItem("dark");

    if (darkOn === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
    }
  }, []);

  function toggleDarkMode() {
    if (!darkMode) {
      localStorage.setItem("dark", "true");
    }

    if (darkMode) {
      localStorage.removeItem("dark");
    }

    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  }

  const providerValues = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={providerValues}>
      {children}
    </DarkModeContext.Provider>
  );
}
