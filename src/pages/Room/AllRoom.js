import React from "react";

import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import PersistentDrawerLeft from "../../components/Drawer";

import RoomList from "./RoomList";
import SidebarIcon from "../../components/SidebarIcon";
import OnlyDrawer from '../../components/OnlyDrawer';
export default function AllRoom() {
  return (
    <div style={{  backgroundColor:"#FBFBFB"}}>
      {/* <PersistentDrawerLeft /> */}
      <SidebarIcon />
      <OnlyDrawer/>
      <Box sx={{ width: "85%", marginLeft: "200px", height:"600px"  }}>
        <div>
          <Link to="/AddRoom">
            <button className="btn btn-primary add-button" style={{marginBottom:"-10px", marginLeft:"910px"}}>AddRoom</button>
          </Link>
        </div>
        <RoomList/>
      </Box>
    </div>
  );
}
