import React from "react";

import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import PersistentDrawerLeft from "../../components/Drawer";

import RoomList from "./RoomList";

export default function AllRoom() {
  return (
    <div>
      <PersistentDrawerLeft />
    
      <Box sx={{ width: "89%", marginLeft: "170px" }}>
        <div>
          <Link to="/AddRoom">
            <button className="btn btn-primary add-button" style={{marginTop:"130px"}}>AddRoom</button>
          </Link>
        </div>
        <RoomList/>
      </Box>
    </div>
  );
}
