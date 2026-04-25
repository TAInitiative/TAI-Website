"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("tai-lang") as Language;
    if (saved === "en" || saved === "zh") setLanguage(saved);
  }, []);

  const toggle = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "zh" : "en";
      localStorage.setItem("tai-lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
