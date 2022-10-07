import React, {useState} from 'react';
import './Navbar.css';
import PropTypes from "prop-types";
import {AppBar, Box,Divider, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemText, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import images from '../../assets';

const drawerWidth = 240;
const navItems = ["Home", "About", "Event", "Gallery", "Sermon", "Contact"];

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
        {navItems.map((item) => (
          <ListItem  href={`/${item}`} key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
          </ListItem>
        ))}
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
              {navItems.map((item) => (
                <Button href={'/'+ item} key={item} sx={{ color: "#000" }}>
                  {item}
                </Button>
              ))}
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
