import { Box, Grid, Typography } from "@mui/material";

import DataTable from "../components/permissions/DataTable";
import FilterCard from "../components/permissions/FilterCard";
import { useState } from "react";
const Permissions = () => {
  const data = [
    {
      name: "rrr",
      date: "2023-1-1",
      user: "www",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "www",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "fff",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "fff",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "www",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "rrr",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "fff",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "fff",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "fff",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "fff",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "fff",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "fff",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "fff",
    },
    {
      name: "role",
      date: "2023-1-1",
      user: "fff",
    },
  ];
  const [searchResult, setSearchResult] = useState(data);
  console.log(searchResult);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
        width: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        py: 5,
        mx: 0,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        color="inherit"
        fontSize={20}
        fontWeight={"medium"}
        letterSpacing={0}
      >
        Permissions
      </Typography>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",

          width: "97%",
          height: "100%",
          justifyContent: "center",
          alignItems: "start",
          gap: 5,
          py: 2,
        }}
      >
        <DataTable data={searchResult} />

        <FilterCard
          data={data}
          setSearchResult={setSearchResult}
          searchResult={searchResult}
        />
      </Grid>
    </Box>
  );
};

export default Permissions;
