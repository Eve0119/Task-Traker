import type { ProgressProps } from "../types/type";
import { Box, Typography, LinearProgress } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AdjustIcon from "@mui/icons-material/Adjust";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

const Progress = ({ total, completed, active }: ProgressProps) => {
  const theme = useTheme();
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
        minHeight: "20vh",
        padding: 3,
        border: "1px solid",
        borderRadius: 2,
        borderColor: "divider",
        marginTop: 3,
        gap: 0,
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        Progress
      </Typography>
      <Box display="flex" alignItems="center">
        <Box flex={1}>
          <LinearProgress
            variant="determinate"
            value={percent}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor:
                theme.palette.mode === "dark" ? "#2c2c2c" : "#f3f6fa",
              "& .MuiLinearProgress-bar": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#fff" : "#181f2a",
                borderRadius: 5,
              },
            }}
          />
        </Box>
        <Typography ml={2} fontWeight={500} color="text.secondary">
          {percent}%
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        gap={16}
        width="100%"
        mt={2}
      >
        <Grid sx={{ textAlign: "center" }}>
          <AdjustIcon color="primary" sx={{ fontSize: 25 }} />
          <Typography variant="h6" fontWeight={700}>
            {total}
          </Typography>
          <Typography color="text.secondary" fontSize={14}>
            Total Tasks
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: "center" }}>
          <RadioButtonUncheckedIcon sx={{ color: "#f57c00", fontSize: 25 }} />
          <Typography variant="h6" fontWeight={700}>
            {active}
          </Typography>
          <Typography color="text.secondary" fontSize={14}>
            Active
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: "center" }}>
          <CheckCircleOutlineIcon sx={{ color: "#43a047", fontSize: 25 }} />
          <Typography variant="h6" fontWeight={700}>
            {completed}
          </Typography>
          <Typography color="text.secondary" fontSize={14}>
            Completed
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Progress;
