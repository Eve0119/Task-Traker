import { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
  toggleTheme: () => void;
  mode: ThemeMode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  mode: "light",
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
        components: {
          MuiToggleButton: {
            styleOverrides: {
              root: {
                border: "none",
                borderRadius: "7px",
                flex: 1,
                padding: "4px 16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "transparent",
                color: mode === "light" ? "#000" : "#fff",
                "&.Mui-selected": {
                  backgroundColor: mode === "light" ? "#000" : "#fff",
                  color: mode === "light" ? "#fff" : "#000",
                },
              },
            },
          },
          MuiCheckbox: {
            styleOverrides: {
              root: {
                color: mode === "light" ? "#000" : "#fff",
                "&.Mui-checked": {
                  color: mode === "light" ? "#9ca3af" : "#fff",
                },
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: mode === "light" ? "#000" : "#fff",
                },
              },
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              root: {
                "&.Mui-focused": {
                  color: mode === "light" ? "#000" : "#fff",
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
