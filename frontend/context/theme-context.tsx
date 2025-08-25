import React, { useEffect, useState, createContext, useContext } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";

type ThemeType = "light" | "dark" | "system";
interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: (theme: string) => {},
  isDark: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>("system");

  const isDark =
    theme === "system" ? systemColorScheme === "dark" : theme === "dark";

  useEffect(() => {}, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
