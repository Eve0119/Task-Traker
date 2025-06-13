import { Box, Typography, TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const NewTask = ({ onAddTask }: { onAddTask: (taskName: string) => void }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleAdd = () => {
    if (taskInput.trim() !== "") {
      onAddTask(taskInput);
      setTaskInput(""); // Clear the input field after adding the task
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        height: "20vh",
        padding: 3,
        border: "1px solid",
        borderRadius: 2,
        borderColor: "divider",
        marginTop: 4,
        gap: 2,
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        Add New Task
      </Typography>
      <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <IconButton
          onClick={handleAdd}
          sx={{
            backgroundColor: "grey.500",
            color: "white",
            "&:hover": {
              backgroundColor: "grey.600",
            },
            borderRadius: 1,
            width: 50,
          }}
        >
          <AddIcon />{" "}
        </IconButton>
      </Box>
    </Box>
  );
};

export default NewTask;
