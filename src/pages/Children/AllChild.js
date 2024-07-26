import React from "react";

import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import PersistentDrawerLeft from "../../components/Drawer";
import ChildList from "./ChildList";
import SidebarIcon from "../../components/SidebarIcon";
import OnlyDrawer from "../../components/OnlyDrawer";

export default function AllChild() {
  return (
    <div style={{  backgroundColor:"#FBFBFB"}}>
      {/* <PersistentDrawerLeft /> */}
      <SidebarIcon />
      <OnlyDrawer />
      {/* <Box height={90} sx={{ direction: "ltr" }}  /> */}
      <Box sx={{ width: "85%", marginLeft: "200px", height:"617px" }}>
        <div>
          <Link to="/AddChild">
            <button className="btn btn-primary add-button" style={{marginBottom:"-10px", marginLeft:"890px"}}>AddChildren</button>
          </Link>
        </div>
        <ChildList />
      </Box>
    </div>
  );
}
