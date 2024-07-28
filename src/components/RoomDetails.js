import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const RoomDetails = () => {
  const [activeTab, setActiveTab] = useState("rooms");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="room-details-container">
      <div className="tabs">
        <button
          onClick={() => handleTabClick("rooms")}
          className={activeTab === "rooms" ? "active" : ""}
        >
          Room
        </button>
        <button
          onClick={() => handleTabClick("absence")}
          className={activeTab === "absence" ? "active" : ""}
        >
          Absence
        </button>
        <button
          onClick={() => handleTabClick("tags")}
          className={activeTab === "tags" ? "active" : ""}
        >
          Tags
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "rooms" && <RoomTabContent />}
        {activeTab === "absence" && <AbsenceTabContent />}
        {activeTab === "tags" && <TagsTabContent />}
      </div>
    </div>
  );
};

const RoomTabContent = () => {
  const rooms = [
    {
      name: "Dream Space",
      children: 20,
      signedInChildren: 20,
      staff: 10,
      signedInStaff: 10,
    },
    {
      name: "Dream Space",
      children: 20,
      signedInChildren: 20,
      staff: 10,
      signedInStaff: 10,
    },
    {
      name: "Dream Space",
      children: 20,
      signedInChildren: 20,
      staff: 10,
      signedInStaff: 10,
    },
    {
      name: "Dream Space",
      children: 20,
      signedInChildren: 20,
      staff: 10,
      signedInStaff: 10,
    },
    {
      name: "Dream Space",
      children: 20,
      signedInChildren: 20,
      staff: 10,
      signedInStaff: 10,
    },
    {
      name: "Dream Space",
      children: 20,
      signedInChildren: 20,
      staff: 10,
      signedInStaff: 10,
    },
    {
      name: "Dream Space",
      children: 20,
      signedInChildren: 20,
      staff: 10,
      signedInStaff: 10,
    },
    {
      name: "Dream Space",
      children: 20,
      signedInChildren: 20,
      staff: 10,
      signedInStaff: 10,
    },
    // Add more room data as needed
  ];

  return (
    <div className="room-tab-content">
      <TableContainer component={Paper}>
        <Table aria-label="room table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ color: "#9C9A9A" }}>
                Room Name
              </TableCell>
              <TableCell align="center">Children</TableCell>
              <TableCell align="center" sx={{ color: "#9C9A9A" }}>
                Signed In
              </TableCell>
              <TableCell align="center" sx={{ color: "#9C9A9A" }}>
                Expected
              </TableCell>
              <TableCell align="center">Staff</TableCell>
              <TableCell align="center" sx={{ color: "#9C9A9A" }}>
                Signed in
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  ⭐ {room.name}
                </TableCell>
                <TableCell align="center">{room.children}</TableCell>
                <TableCell align="center">{room.signedInChildren}</TableCell>
                <TableCell align="center">{room.children}</TableCell>
                <TableCell align="center">{room.staff}</TableCell>
                <TableCell align="center">{room.signedInStaff}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const AbsenceTabContent = () => {
  return <div>Absence Content</div>;
};

const TagsTabContent = () => {
  return <div>Tags Content</div>;
};

export default RoomDetails;
