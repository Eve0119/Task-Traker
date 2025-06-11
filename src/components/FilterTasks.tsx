import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { FilterTasksProps } from "../types/type";

const FilterTasks = ({
  filter,
  search,
  setFilter,
  setSearch,
  banner,
}: FilterTasksProps) => {
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
        sx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[700]
              : theme.palette.grey[100],
          borderRadius: 2,
          padding: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
          maxHeight: "35px",
        })}
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
          sx={(theme) => ({
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
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
              backgroundColor: "transparent",
            },
            "& .Mui-selected": {
              backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
              color: theme.palette.mode === "dark" ? "#000" : "#fff",
              "& .MuiChip-root": {
                backgroundColor: "#3c445c",
                color: "#fff",
              },
            },
          })}
        >
          {["all", "active", "completed"].map((status) => (
            <ToggleButton key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
              <Box
                sx={(theme) => ({
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#2C3141" : "#e0e0e0",
                  color: theme.palette.mode === "dark" ? "#fff" : "#000",
                  fontSize: 12,
                  px: 1,
                  borderRadius: "50%",
                  maxWidth: 18,
                  height: 19,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                {banner[status as keyof typeof banner]}
              </Box>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default FilterTasks;
