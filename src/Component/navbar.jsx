import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router";

// import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import PollList from "./pollList";
// import Stack from "@mui/material/Stack";

  
 

const Navbar = () => {
const User= localStorage.getItem("role")
  const navigate= useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] =useState(null);

  const Role= localStorage.getItem("role")
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(true);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(true);
  // };

  const handleCloseNavMenu = () => {
    // {User=="admin"?<adminPanel/>: <pollList/> }
    setAnchorElNav(false);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(false);
  // };

  const handleLogout= ()=>{
    localStorage.clear();
    navigate('/')

  }

  // const backToHome=(Role)=>{
  //   Role=='admin'?
  //   navigate('/adminPanel'):
  //   navigate('/pollList')
  // }
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Poll APP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Polling App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => ( */}
              <Button
                // key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {/* {page} */}
              </Button>
            {/* ))} */}

            {/* <Button onClick={backToHome}>Home Page</Button> */}
          </Box>

          <Button className="admitLogoutBtn"  onClick={handleLogout}  variant="contained" >
            Logout
          </Button>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">

              <Stack direction="row" spacing={1}>
      {/* <Chip avatar={<Avatar>M</Avatar>} label="Avatar" /> */}
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label={Role}
        variant="outlined"
      />
    </Stack>
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> */}
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
