import {
  createContext,
  useMemo,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import { ThemeConfig } from "@/themes";

import { defaultTheme } from "@/themes/defaultTheme";
import { buildTheme } from "@/themes/buildTheme";

interface ThemeContextType {
  theme: ThemeConfig;

  setTheme: Dispatch<SetStateAction<ThemeConfig>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,

  setTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);

  const currentTheme = useMemo(() => buildTheme(theme), [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <MuiThemeProvider theme={currentTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
