import React, {useState} from 'react';
import './Navbar.css';
import PropTypes from "prop-types";
import {AppBar, Box,Divider, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemText, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import images from '../../assets';

const drawerWidth = 240;
// const navItems = ["Home", "About", "Event", "Gallery", "Sermon", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img alt="messiah plainfield logo " src={images.Logo} />
      <Divider />
      <List>
          <ListItem href={'/'} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
          <ListItem href={'/About'} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={'About'} />
            </ListItemButton>
          </ListItem>
          <ListItem href={'/Events'} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={'Events'} />
            </ListItemButton>
          </ListItem>
          <ListItem href={'/Gallery'} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={'Gallery'} />
            </ListItemButton>
          </ListItem>
          <ListItem href={'/Sermon'} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={'Sermon'} />
            </ListItemButton>
          </ListItem>
          <ListItem href={'/Contact'} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={'Contact'} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: "flex" }}>
        <AppBar className='Navbarcolor' component="nav">
          <Toolbar>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
            >
              <img alt="messiah plainfield logo" width={80} src={images.Logo} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button href={'/'} sx={{ color: "#000" }}> Home</Button>
              <Button href={'/About'} sx={{ color: "#000" }}> About</Button>
              <Button href={'/Events'} sx={{ color: "#000" }}> Events</Button>
              <Button href={'/Gallery'} sx={{ color: "#000" }}> Gallery</Button>
              <Button href={'/Sermon'} sx={{ color: "#000" }}> Sermon</Button>
              <Button href={'/Contact'} sx={{ color: "#000" }}> Contact</Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ my: 2, color:'#000', display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    );
  }

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default Navbar;
