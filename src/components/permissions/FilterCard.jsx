import { Typography, Paper, TextField, Box } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";

import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MoreIcon from "@mui/icons-material/MoreVert";

const FilterCard = ({ data, setSearchResult, searchResult }) => {
  const [users, setUsers] = useState("");
  const [name, setName] = useState("");

  const handleUser = (event) => {
    setUsers(event.target.value);
  };
  const [fromDate, setFromDate] = useState("");

  const [toDate, setToDate] = useState("");

  console.log(users);
  //Search
  const handleSearchChange = () => {
    const result = data?.filter(
      (user) =>
        user.name?.toLowerCase().includes(name?.toLowerCase()) ||
        user.user?.toLowerCase().includes(users?.toLowerCase()) ||
        (user.date >= fromDate && user.date <= toDate)
    );
    setSearchResult(result);
  };
  const handleDelete = (e) => {
    // e.preventDefault();

    setSearchResult(data);
  };

  return (
    <Paper
      elevation={3}
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "85%",

        width: "30%",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        sx={{
          width: "91.5%",

          bgcolor: blue[500],
          height: "25%",

          justifyContent: "space-between",
          alignItems: "center",

          px: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: "#ffffff",
            borderRadius: "5px",

            px: 2,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            color="inherit"
            fontSize={17}
            fontWeight={"medium"}
            letterSpacing={0}
          >
            Result {searchResult.length}
          </Typography>
        </Box>

        <IconButton
          size="small"
          aria-label="display more actions"
          edge="end"
          color="blueGrey[50]"
          sx={{
            bgcolor: "#ffffff",
            borderRadius: "25px",
          }}
        >
          <MoreIcon />
        </IconButton>
      </Stack>
      <Stack
        spacing={2}
        direction="column"
        sx={{
          height: "63%",

          width: "91.5%",
          justifyContent: "start",
          alignItems: "start",
          px: 2,
          py: 2,
        }}
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          sx={{
            display: "flex",
            flexDirection: "column",

            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TextField
            variant="standard"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            id="date"
            label="From Date"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="standard"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            id="date"
            label="To Date"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </LocalizationProvider>

        <FormControl variant="standard" sx={{ minWidth: "75%" }}>
          <InputLabel id="demo-simple-select-standard-label">User</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={users}
            onChange={handleUser}
            label="User"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="fff">fff</MenuItem>
            <MenuItem value="www">ww</MenuItem>
            <MenuItem value="rrr">rrr</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          width: "100%",
          height: "25%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={handleSearchChange}>
          Search
        </Button>
        <Button variant="text" onClick={handleDelete}>
          Delete
        </Button>
      </Stack>
    </Paper>
  );
};

export default FilterCard;
