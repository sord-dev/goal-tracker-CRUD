import React from "react";
import {
    AppBar,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
  } from "@mui/material";
  import HelpCenterIcon from "@mui/icons-material/HelpCenter";
  import { useNavigate } from "react-router-dom";

function NavBar() {

    let navigate = useNavigate();
    const appbarStyles = {
      display: "flex",
      gap: "1rem",
      justifyContent: "space-between",
    };
  return (
    <AppBar>
      <Toolbar sx={appbarStyles}>
        <Tooltip title="Goals">
          <Typography variant="h4" onClick={() => navigate("/")}>
            sord-dev
          </Typography>
        </Tooltip>

        <Tooltip title="About">
          <IconButton
            sx={{ color: "white" }}
            onClick={() => navigate("/about")}
          >
            <HelpCenterIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
