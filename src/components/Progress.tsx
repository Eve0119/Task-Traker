import type { ProgressProps } from "../types/type";
import { Box } from "@mui/material";

const Progress = ({ total, completed, active }: ProgressProps) => {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

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
    ></Box>
  );
};

export default Progress;
