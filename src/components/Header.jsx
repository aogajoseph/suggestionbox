import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <AppBar position="static" color="text">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="Logo" style={{ height: 40 }} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
