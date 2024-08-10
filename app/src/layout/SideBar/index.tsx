import { useState } from "react";

interface SidebarProps {
  drawerOpen: boolean;
}

const Sidebar = ({drawerOpen}: SidebarProps) => {
 const[open, setOpen] = useState(drawerOpen);

 const handleDrawerOpen = () => {
   setOpen(true);
 }

 const handleDrawerClose = () => {
   setOpen(false);
 }
}
