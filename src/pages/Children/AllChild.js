import React from "react";

import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import PersistentDrawerLeft from "../../components/Drawer";
import ChildList from "./ChildList";

export default function AllChild() {
  return (
    <div>
      <PersistentDrawerLeft />
      {/* <Box height={90} sx={{ direction: "ltr" }}  /> */}
      <Box sx={{ width: "89%", marginLeft: "170px" }}>
        <div>
          <Link to="/AddChild">
            <button className="btn btn-primary add-button">AddChildren</button>
          </Link>
        </div>
        <ChildList />
      </Box>
    </div>
  );
}
