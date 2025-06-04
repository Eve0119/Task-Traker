import { Box, Typography, Checkbox } from "@mui/material";

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
    </Box>
  );
};
export default AllTasks;
