import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { FilterTasksProps } from "../types/type";
export type { FilterTasksProps } from "../types/type";

const FilterTasks = ({
  filter,
  search,
  setFilter,
  setSearch,
  banner,
}: FilterTasksProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        padding: 3,
        borderRadius: 2,
        maxWidth: 900,
        margin: "0 auto",
        marginTop: 4,
        gap: 2,
        display: "flex",
        alignItems: "left",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "20vh",
      }}
    >
      <Typography variant="h5">Filter Tasks</Typography>
      <TextField
        sx={{ width: "100%" }}
        fullWidth
        size="small"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          //   backgroundColor: isDark ? "#0B1220" : "grey.100",
          backgroundColor: isDark ? "grey.700" : "grey.100",
          borderRadius: 2,
          padding: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
          maxHeight: "35px",
        }}
      >
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(_, newFilter) => {
            if (newFilter !== null) {
              setFilter(newFilter);
            }
          }}
          aria-label="task filter"
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            "& .MuiToggleButton-root": {
              border: "none",
              borderRadius: "7px",
              flex: 1,
              padding: "4px 16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              textTransform: "none",
              fontWeight: "bold",
              color: isDark ? "#fff" : "#000",
              backgroundColor: "transparent",
            },
            "& .Mui-selected": {
              backgroundColor: isDark ? "white" : "#000",
              color: isDark ? "#000" : "#fff",
              "& .MuiChip-root": {
                backgroundColor: "#3c445c",
                color: "#fff",
              },
            },
          }}
        >
          <ToggleButton value="all">
            All
            <Box
              sx={{
                backgroundColor: isDark ? "#2C3141" : "#e0e0e0",
                color: isDark ? "white" : "#000",
                fontSize: 12,
                px: 1,
                borderRadius: "50%",
                maxWidth: 18,
                height: 19,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {banner.all}
            </Box>
          </ToggleButton>
          <ToggleButton value="active">
            Active
            <Box
              sx={{
                backgroundColor: isDark ? "#2C3141" : "#e0e0e0",
                color: isDark ? "white" : "#000",
                fontSize: 12,
                px: 1,
                borderRadius: "50%",
                maxWidth: 18,
                height: 19,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {banner.active}
            </Box>
          </ToggleButton>
          <ToggleButton value="completed">
            Completed
            <Box
              sx={{
                backgroundColor: isDark ? "#2C3141" : "#e0e0e0",
                color: isDark ? "white" : "#000",
                fontSize: 12,
                px: 1,
                borderRadius: "50%",
                maxWidth: 18,
                height: 19,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {banner.completed}
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default FilterTasks;
