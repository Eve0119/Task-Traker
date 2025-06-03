import React from "react";
import Header from "./components/Header";
import { Toolbar, Box } from "@mui/material";
import AddNewTask from "./components/AddNewTask.tsx";

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      {/* This adds vertical spacing to push content below the fixed header */}
      <Toolbar />
      <Box sx={{ p: 2 }}>
        <AddNewTask />
      </Box>
    </Box>
  );
};

export default App;
