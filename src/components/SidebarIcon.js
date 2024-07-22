import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawer } from "../Contexts/DrawerProvider";

const SidebarIcon = () => {
  const { open, handleDrawerOpen, handleDrawerClose } = useDrawer();

  return (
    <div>
      <IconButton
        color="#225C8B"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ml: "15px" }}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default SidebarIcon;
