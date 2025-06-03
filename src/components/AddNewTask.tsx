import React from "react";
import { Box, Typography, TextField, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddTask: React.FC = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: "8px",
        px: 3,
        py: 2,
        mb: 3,
        maxWidth: "800px",
        mx: "auto", // center horizontally
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Add New Task
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="Add a new task..."
          fullWidth
          size="small"
          sx={{
            backgroundColor: "#f9fafb",
            borderRadius: "6px",
            input: { paddingY: 1.5 },
          }}
        />
        <IconButton
          sx={{
            backgroundColor: "#6b7280",
            color: "white",
            borderRadius: "6px",
            minWidth: "40px",
            height: "40px",
            "&:hover": {
              backgroundColor: "#4b5563",
            },
          }}
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default AddTask;
