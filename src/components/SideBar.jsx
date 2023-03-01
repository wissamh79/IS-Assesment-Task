import { useApp } from "../context";
import { NavLink } from "react-router-dom";
import { Stack, Box, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Logout } from "@mui/icons-material";
import { blueGrey, deepPurple } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
const SideBar = () => {
  const { features, isSide, handleSideBar } = useApp();

  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{
        boxShadow: 3,
        width: isSide ? 200 : 75,

        justifyContent: "space-between",
        alignItems: "center",
        py: 5,
      }}
    >
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>

      <List
        sx={{
          width: "75%",
          height: "75%",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {features.map(({ id, title, to, icon }) => (
          // <NavLink
          //   key={id}
          //   to={to}
          //   className={({ isActive }) =>
          //     isActive
          //       ? " flex items-center justify-center space-x-2 text-accent text-base rounded font-semibold "
          //       : "flex items-center justify-center space-x-2"
          //   }
          // >
          <ListItemButton key={id} component="a" href={`${to}`}>
            <ListItemIcon>
              {" "}
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                {" "}
                {icon}
              </IconButton>
            </ListItemIcon>
            <ListItemText
              primary={isSide ? title : ""}
              primaryTypographyProps={{
                fontSize: 15,
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            />
          </ListItemButton>
          // </NavLink>
        ))}
      </List>
      <IconButton size="small" edge="start" color="inherit" aria-label="menu">
        {" "}
        <Logout />
      </IconButton>
    </Stack>
  );
};

export default SideBar;
