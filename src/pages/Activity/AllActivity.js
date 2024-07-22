import React from "react";

import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

import OnlyDrawer from "../../components/OnlyDrawer";

import ActivityList from "./ActivityList";
import FoodIcon from "@mui/icons-material/Restaurant";
import SleepIcon from "@mui/icons-material/Hotel";
import DiaperIcon from "@mui/icons-material/BabyChangingStation";
import AccidentIcon from "@mui/icons-material/Healing";
import LearningIcon from "@mui/icons-material/School";
import DrinkIcon from "@mui/icons-material/LocalDrink";
import SidebarIcon from "../../components/SidebarIcon";
export default function AllActivity() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <Box sx={{ display: "flex", padding: "10px" }}>
        <nav style={{ display: "flex" }}>
          <SidebarIcon />
          <Box sx={{ display: "flex", marginLeft: "240px" }}>
            <h1>The nav </h1>
          </Box>
        </nav>
        <OnlyDrawer />
      </Box>
      <div className="activity">
        <Box
          display="flex"
          justifyContent="space-around"
          marginBottom={"30px"}
          width={"100%"}
        >
          <Button
            style={{ width: "10%", height: "70px" }}
            sx={{
              backgroundColor: "#a6f3a6",
              color: "#000000",
              flexDirection: "column",
              "&:hover": {
                backgroundColor: "#a6f3a6",
              },
            }}
          >
            <FoodIcon sx={{ marginBottom: 1, color: "#4CAF50" }} />
            +Food
          </Button>
          <Button
            style={{ width: "10%", height: "70px" }}
            sx={{
              backgroundColor: "#ffd2dc",
              color: "#000000",
              flexDirection: "column",
              "&:hover": {
                backgroundColor: "#ffd2dc",
              },
            }}
          >
            <SleepIcon sx={{ marginBottom: 1, color: "#E91E63" }} />
            +Sleep
          </Button>
          <Button
            style={{ width: "10%", height: "70px" }}
            sx={{
              backgroundColor: "#cfefff",
              color: "#000000",
              flexDirection: "column",
              "&:hover": {
                backgroundColor: "#cfefff",
              },
            }}
          >
            <DiaperIcon sx={{ marginBottom: 1, color: "#03A9F4" }} />
            +Diaper
          </Button>
          <Button
            style={{ width: "10%", height: "70px" }}
            sx={{
              backgroundColor: "#f6e1ff",
              color: "#000000",
              flexDirection: "column",
              "&:hover": {
                backgroundColor: "#f6e1ff",
              },
            }}
          >
            <AccidentIcon sx={{ marginBottom: 1, color: "#9C27B0" }} />
            +Accident
          </Button>
          <Button
            style={{ width: "10%", height: "70px" }}
            sx={{
              backgroundColor: "#fff6cc",
              color: "#000000",
              flexDirection: "column",
              "&:hover": {
                backgroundColor: "#fff6cc",
              },
            }}
          >
            <LearningIcon sx={{ marginBottom: 1, color: "#FFC107" }} />
            +Learning
          </Button>
          <Button
            style={{ width: "10%", height: "70px" }}
            sx={{
              backgroundColor: "#cffff9",
              color: "#000000",
              flexDirection: "column",
              "&:hover": {
                backgroundColor: "#cffff9",
              },
            }}
          >
            <DrinkIcon sx={{ marginBottom: 1, color: "#00BCD4" }} />
            +Drink
          </Button>
        </Box>
        <Box width={"100%"}>
          <div>
            <Link to="">
              <button className="btn btn-primary add-button">
                AddActivity
              </button>
            </Link>
          </div>
          <ActivityList />
        </Box>
      </div>
    </div>
  );
}
