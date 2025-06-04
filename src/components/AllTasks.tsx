import { Box, Typography, Checkbox } from "@mui/material";

export interface AllTasksProps {
  taskName?: string;
  isComplete?: boolean;
  dateCreated?: null | Date;
  dateCompleted?: null | Date;
}

const AllTasks = () => {
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
        height: "20vh",
        alignItems: "left",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5">All Tasks</Typography>
      <Box
        sx={{
          padding: 2,
          maxWidth: 900,
          margin: "0 auto",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          width: "100%",
          alignItems: "left",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
        }}
      >
        <Checkbox />
      </Box>
    </Box>
  );
};
export default AllTasks;
