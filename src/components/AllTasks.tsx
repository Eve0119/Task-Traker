import { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import type { Task } from "../types/type";
import { Icon } from "@iconify/react";

const AllTasks = ({
  tasks,
  onToggleComplete,
  clearCompletedTasks,
  editTask,
  deleteTask,
  search,
  filter,
}: {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  clearCompletedTasks: () => void;
  editTask: (id: number, updatedTaskName: string) => void;
  deleteTask: (id: number) => void;
  search: string;
  filter: "all" | "active" | "completed";
}) => {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTaskName, setEditedTaskName] = useState("");

  const startEditing = (task: Task) => {
    setEditingTaskId(task.id);
    setEditedTaskName(task.taskName);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditedTaskName("");
  };

  const saveEditedTask = (task: Task) => {
    if (editedTaskName.trim() === "") {
      cancelEditing();
    } else {
      editTask(task.id, editedTaskName);
    }
    setEditingTaskId(null);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.taskName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
        ? !task.isComplete
        : task.isComplete;

    return matchesSearch && matchesFilter;
  });

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        border: "1px solid",
        margin: "0 auto",
        maxWidth: 900,
        borderRadius: 2,
        borderColor: "divider",
        marginTop: 4,
        minHeight: "20vh",
        alignItems: "left",
        justifyContent: "center",
        bottomPadding: 8,
      }}
    >
      <Typography variant="h5" marginBottom={1}>
        {filter === "all"
          ? "All Tasks"
          : filter === "active"
          ? "Active Tasks"
          : "Completed Tasks"}
      </Typography>
      {filteredTasks.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Icon icon="mdi:party-popper" fontSize={50} color="textSecondary" />
          <Typography variant="h6" color="textSecondary">
            Hooray! No task
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Add a task above to get started
          </Typography>
        </Box>
      ) : (
        <>
          {[...filteredTasks].reverse().map((task) => (
            <Box
              sx={{
                padding: 2,
                maxWidth: 900,
                margin: "0 auto",
                flexDirection: "row",
                display: "flex",
                gap: 0,
                justifyContent: "flex-start",
                width: "100%",
                alignItems: "left",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                position: "relative",
                "&:hover .task-actions": {
                  opacity: 1,
                },
                transition: "0.2s ease",
              }}
            >
              {editingTaskId === task.id ? (
                // --- Edit Mode
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 0,
                  }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    value={editedTaskName}
                    onChange={(e) => setEditedTaskName(e.target.value)}
                  />
                  <IconButton onClick={() => saveEditedTask(task)}>
                    <Icon icon="mdi:check" color="textsecondary" />
                  </IconButton>
                  <IconButton onClick={cancelEditing}>
                    <Icon icon="mdi:close" color="textsecondary" />
                  </IconButton>
                </Box>
              ) : (
                <>
                  <FormControlLabel
                    sx={{
                      marginRight: 0,
                    }}
                    key={task.id}
                    control={
                      <Checkbox
                        checked={task.isComplete}
                        onChange={() => onToggleComplete(task.id)}
                      />
                    }
                    label=""
                  />
                  <Box>
                    {task.isComplete ? (
                      <Typography
                        sx={{ textDecoration: "line-through" }}
                        variant="body1"
                        color="textSecondary"
                      >
                        {task.taskName}
                      </Typography>
                    ) : (
                      <Typography variant="body1">{task.taskName}</Typography>
                    )}

                    <Typography variant="body2" color="textSecondary">
                      {task.dateCreated && task.dateCompleted
                        ? `Created on: ${new Date(
                            task.dateCreated
                          ).toLocaleDateString()} | Completed on: ${new Date(
                            task.dateCompleted
                          ).toLocaleDateString()}`
                        : task.dateCreated
                        ? `Created on: ${new Date(
                            task.dateCreated
                          ).toLocaleDateString()}`
                        : "No date information available"}
                    </Typography>
                  </Box>
                  <Box
                    className="task-actions"
                    sx={{
                      position: "absolute",
                      right: 20,
                      display: "flex",
                      gap: 0,
                      opacity: 0,
                      transition: "opacity 0.2s ease-in-out",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <IconButton>
                      <Icon
                        icon="mdi:edit"
                        fontSize="medium"
                        color="textsecondary"
                        onClick={() => startEditing(task)}
                      />
                    </IconButton>
                    <IconButton>
                      <Icon
                        icon="mdi:delete"
                        fontSize="medium"
                        color="textsecondary"
                        onClick={() => deleteTask(task.id)}
                      />
                    </IconButton>
                  </Box>{" "}
                </>
              )}
            </Box>
          ))}
          <Button
            sx={{
              maxWidth: 200,
              border: 1,
              borderColor: "rgba(145, 52, 52, 0.2)",
              borderRadius: 2,
              color: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              marginTop: 2,
              marginBottom: 2,
              gap: 2,
            }}
            onClick={clearCompletedTasks}
            disabled={tasks.filter((task) => task.isComplete).length === 0}
          >
            <Icon icon="mdi:trash-can" fontSize={20} />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Clear Completed
            </Typography>
          </Button>
        </>
      )}
    </Box>
  );
};
export default AllTasks;
