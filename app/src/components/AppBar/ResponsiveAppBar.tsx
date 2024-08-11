"use client"
import React, { ComponentType } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, AppBar, Toolbar, Box, ListItemButton, ListItemIcon, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { MenuList } from "../../../src/constants/menuList";
import { useRouter } from 'next/navigation';

const drawerWidth = 240;

export function ResponsiveAppBar() {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {MenuList.map((menu: Menu) => (
          <ListItem key={menu.id}>
            <ListItemButton onClick={() => router.push(menu.url)}>
              <ListItemIcon>
                <menu.icon />
              </ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" style={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ backgroundColor: "#fbfbfb" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{ marginRight: theme.spacing(2) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: "64px" }}></Box>
      <nav>
        <Drawer
          variant={"temporary"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              top: "64px",
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}

interface Menu {
  id: string,
  title: string,
  url: string,
  icon: any,

}
