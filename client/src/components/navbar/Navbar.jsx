import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { iconBox, typeGraphDesktop, typeGraphMobile } from "./navbar.style";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={typeGraphDesktop}>
            Phonebook
          </Typography>

          <Box sx={iconBox}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" noWrap component="div" sx={typeGraphMobile}>
            Phonebook
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
