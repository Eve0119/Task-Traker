import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import type { Task } from "../types/type";

const AllTasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
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
      <Typography variant="h5">All Tasks</Typography>
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
            control={<Checkbox checked={task.isComplete} />}
            label=""
          />
          <Box>
            <Typography variant="body1">{task.taskName}</Typography>
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
    </Box>
  );
};
export default AllTasks;
