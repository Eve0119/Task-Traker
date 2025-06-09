import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import type { Task } from "../types/type";
import { Icon } from "@iconify/react";

const AllTasks = ({
  tasks,
  onToggleComplete,
  clearCompletedTasks,
}: {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  clearCompletedTasks: () => void;
}) => {
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
        minHeightheight: "20vh",
        alignItems: "left",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" marginBottom={1}>
        All Tasks
      </Typography>
      {tasks.map((task) => (
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
          }}
        >
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
    </Box>
  );
};
export default AllTasks;
