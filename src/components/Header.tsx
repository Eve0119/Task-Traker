import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function Header() {
  const { toggleTheme, mode } = useContext(ThemeContext);
  const theme = useTheme();
  const isDarkMode = mode === "dark";

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 2, py: 1 }}>
        <Box display="flex" alignItems="center" gap={2} paddingLeft={5}>
          <IconButton
            sx={{
              borderRadius: 1,
              backgroundColor: isDarkMode ? "#ffffff" : "#000000",
              color: isDarkMode ? "#000000" : "#ffffff",
              "&:hover": {
                backgroundColor: isDarkMode ? "#f3f4f6" : "#1f2937", // light gray for dark mode, dark gray for light mode
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Personal Task Tracker
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stay organized and get things done
            </Typography>
          </Box>
        </Box>

        <IconButton
          onClick={toggleTheme}
          color="inherit"
          sx={{
            border: 1,
            marginRight: 8,
            borderRadius: 1,
            borderColor: "divider",
          }}
        >
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
