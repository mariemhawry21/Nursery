import React, { useState } from "react";
import "./style.css";
import Sidenav from "../components/Sidenav";
import NAvbar from "../components/Navbar";
import Accordion from "../components/Accordion";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "../dash.css";

import { useNavigate } from "react-router-dom";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import NoChildrenIcon from "@mui/icons-material/FolderOpen";

export default function Home() {
  const [showBoxes, setShowBoxes] = useState(true); // State to track visibility of boxes

  // Function to toggle visibility of boxes
  const toggleBoxes = () => {
    setShowBoxes((prevState) => !prevState);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();

  const [displayText, setDisplayText] = useState("");

  const handleClick = (sentence) => {
    setDisplayText(sentence);

    // active menu
  };
  return (
    <div>
      {<Sidenav />}
      <h1>HOme</h1>
    </div>
  );
}
