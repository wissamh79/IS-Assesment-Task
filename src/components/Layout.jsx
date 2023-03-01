import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

import Box from "@mui/material/Box";
const Layout = () => {
  return (
    <section>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 1,
          height: 1,

          px: 0,
          mx: 0,
        }}
      >
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 1,
            height: 1,
          }}
        >
          <SideBar />

          <Outlet />
        </Box>
      </Box>
    </section>
  );
};

export default Layout;
