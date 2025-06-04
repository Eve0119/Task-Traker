import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Header() {
  const { toggleTheme, mode } = useContext(ThemeContext);
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 3, py: 2 }}>
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton
            sx={{
              backgroundColor: "#111827",
              color: "#fff",
              "&:hover": { backgroundColor: "#1f2937" },
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

        <IconButton onClick={toggleTheme} color="inherit">
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
