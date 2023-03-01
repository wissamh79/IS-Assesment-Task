import { Box, Divider, Grid, Typography, Paper } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import IconButton from "@mui/material/IconButton";
import DataCard from "./FilterCard";
import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";

import Checkbox from "@mui/material/Checkbox";

import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

const DataTable = ({ data }) => {
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
  return (
    <Paper
      variant="outlined"
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",

        width: "60%",
        height: "100%",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <TableContainer>
        <Table aria-labelledby="tableTitle" size={"medium"}>
          <TableHead
            sx={{
              bgcolor: blue[500],
              color: "red",
            }}
          >
            <TableRow>
              <TableCell component="th">
                <Typography
                  color="#FFFFFF"
                  variant="h6"
                  component="div"
                  fontSize={15}
                  fontWeight={"bold"}
                  letterSpacing={0}
                >
                  #
                </Typography>
              </TableCell>
              <TableCell align="center">
                {" "}
                <Typography
                  color="#FFFFFF"
                  variant="h6"
                  component="div"
                  fontSize={15}
                  fontWeight={"bold"}
                  letterSpacing={0}
                >
                  Name
                </Typography>
              </TableCell>
              <TableCell align="center">
                {" "}
                <Typography
                  color="#FFFFFF"
                  variant="h6"
                  component="div"
                  fontSize={15}
                  fontWeight={"bold"}
                  letterSpacing={0}
                >
                  Date
                </Typography>
              </TableCell>
              <TableCell align="center">
                {" "}
                <Typography
                  color="#FFFFFF"
                  variant="h6"
                  component="div"
                  fontSize={15}
                  fontWeight={"bold"}
                  letterSpacing={0}
                >
                  Functionality
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover key={index}>
                  <TableCell component="th" scope="row" sx={{ width: 20 }}>
                    {index}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center" sx={{ width: 20 }}>
                    <IconButton
                      size="small"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                    >
                      {" "}
                      <SettingsRoundedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",

          justifyContent: "center",
          alignItems: "center",

          px: 2,
        }}
      />
    </Paper>
  );
};

export default DataTable;
