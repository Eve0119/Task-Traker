import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px

  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ px: 2 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography
              variant={isMobile ? "subtitle1" : "h6"}
              fontWeight="bold"
              noWrap
            >
              Personal Task Tracker
            </Typography>
            {!isMobile && (
              <Typography variant="body2" color="text.secondary">
                Stay organized and get things done
              </Typography>
            )}
          </Box>
        </Box>
        <IconButton edge="end" color="inherit" aria-label="settings">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
