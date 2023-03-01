import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useApp } from "../context";
export default function Header() {
  const { handleSideBar } = useApp();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSideBar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Permissions</Typography>
          <Typography
            variant="h6"
            component="h1"
            color="inherit"
            fontSize={20}
            fontWeight={"bold"}
            letterSpacing={5}
          >
            MILESTONE
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
