import React, { createContext, useState, useContext } from "react";

// Create a context
const DrawerContext = createContext();

// Create a provider component
export const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{ open, handleDrawerOpen, handleDrawerClose }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

// Custom hook to use the Drawer context
export const useDrawer = () => {
  return useContext(DrawerContext);
};
