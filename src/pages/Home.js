import React, { useState, useEffect } from "react";
import "./style.css";
import ResponsiveDrawer from "../components/Drawer";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "../dash.css";
import HailIcon from "@mui/icons-material/Hail";
import HomeIcon from "@mui/icons-material/Home";
import { HiOutlineUser } from "react-icons/hi";
import { CiTempHigh } from "react-icons/ci";
import { BsCardChecklist } from "react-icons/bs";
import { LuSun } from "react-icons/lu";
import { FaBriefcaseMedical } from "react-icons/fa";
import { GiStickingPlaster } from "react-icons/gi";
import { MdMenuBook } from "react-icons/md";
import { LuDonut } from "react-icons/lu";

import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { green, pink, yellow, orange, blue } from "@mui/material/colors";
import {
  AccessTime,
  WbSunny,
  Person,
  MedicalServices,
  Report,
  Assessment,
  RestaurantMenu,
  Star,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import RoomDetails from "../components/RoomDetails";
// import { Typography } from "@mui/material";
export default function Home() {
  const [showBoxes, setShowBoxes] = useState(true); // State to track visibility of boxes
  const [currentTime, setCurrentTime] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Function to update the current time
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    const formatDate = (date) => {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const monthsOfYear = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const dayOfWeek = daysOfWeek[date.getDay()];
      const month = monthsOfYear[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();

      const daySuffix = (day) => {
        if (day >= 11 && day <= 13) {
          return "th";
        }
        switch (day % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      };

      return `${dayOfWeek}, ${month} ${day}${daySuffix(day)}, ${year}`;
    };

    // Set the initial time and formatted date
    updateTime();
    setFormattedDate(formatDate(new Date(2024, 6, 13))); // Jul 13th, 2024

    // Update the time every minute
    const timer = setInterval(updateTime, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);
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

  const data = [
    {
      title: "25 Children",
      subtitle: "25 Staff",
      icon: <HiOutlineUser />,
      color: green[500],
    },
    {
      title: "5 Children",
      subtitle: "2 Staff",
      icon: <CiTempHigh />,
      color: pink[500],
    },
    {
      title: "27 Children",
      subtitle: "11 Staff",
      icon: <BsCardChecklist />,
      color: green[500],
    },
    {
      title: "7 Children",
      subtitle: "20 staff",
      icon: <LuSun />,
      color: yellow[700],
    },
  ];
  const tasks = [
    {
      text: "2 Medication form overview",
      icon: <FaBriefcaseMedical color={`${green[900]}`} size={24} />,
      bg: "#BBEC6C",
    },
    {
      text: "4 Accident in the 7 days",
      icon: <GiStickingPlaster color={`${blue[900]}`} size={24} />,
      bg: "#8AC9FE",
    },
    {
      text: "1 assessment pending review",
      icon: <MdMenuBook color={` ${pink[900]}`} size={24} />,
      bg: "#F6A7D2",
    },
    {
      text: "5 Food form overview",
      icon: <LuDonut color={` ${orange[900]}`} size={24} />,
      bg: "#FEE140",
    },
  ];
  return (
    <div style={{ backgroundColor: "#FBFBFB", minHeight: "100vh" }}>
      <ResponsiveDrawer appBarPageName={"home"} />
      <main
        style={{ marginTop: "80px", marginLeft: "250px", marginRight: "20px" }}
      >
        <div className=" mt-5">
          <h1
            className=""
            style={{ fontFamily: "Katibeh", marginBottom: "15px" }}
          >
            Good Morning, Sofia
          </h1>
          <p style={{ fontWeight: "bold" }}>Site Overview</p>
          <div className="home-grid">
            <div className="home-grid-box">
              {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ borderRadius: "10px" }} elevation={2}>
                    <CardContent sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        sx={{
                          color: item.color || green[500],
                          mr: 2,
                          bgcolor: "#fff",
                          fontSize: 24,
                        }}
                      >
                        {item.icon}
                      </Avatar>
                      <div>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography color="textSecondary">
                          {item.subtitle}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </div>
            <div className="second">
              <div className="home-grid-box-2">
                {tasks.map((item) => {
                  return (
                    <Paper
                      elevation={2}
                      square={false}
                      sx={{
                        display: "flex",
                        padding: "15px",
                        marginBottom: "20px",
                        borderRadius: "10px",
                        backgroundColor: item.bg,
                        alignItems: "center",
                        opacity: "80%",
                      }}
                    >
                      {item.icon}
                      <Typography variant="h6" marginLeft={"10px"}>
                        {item.text}
                      </Typography>
                    </Paper>
                  );
                })}
              </div>
              <div className="home-grid-box-4">
                <h1
                  style={{
                    fontWeight: 500,
                    fontSize: "50px",
                    marginBottom: "10px",
                  }}
                >
                  {currentTime}
                </h1>
                <p>{formattedDate}</p>
              </div>
            </div>
            <Box className="home-grid-box-3" elevation={1} component={Paper}>
              <Box sx={{ display: "flex" }}>
                <HomeIcon
                  backgroundColor="blue"
                  color="green"
                  sx={{ marginRight: "15px" }}
                />
                <p>Rooms</p>
              </Box>
              <RoomDetails />
            </Box>
            <Box className="home-grid-box-5" elevation={1} component={Paper}>
              <Box sx={{ display: "flex" }}>
                <HomeIcon
                  backgroundColor="blue"
                  color="green"
                  sx={{ marginRight: "15px" }}
                />
                <p>Rooms</p>
              </Box>
            </Box>
            <Box className="home-grid-box-5" elevation={1} component={Paper}>
              <Box sx={{ display: "flex" }}>
                <HomeIcon
                  backgroundColor="blue"
                  color="green"
                  sx={{ marginRight: "15px" }}
                />
                <p>Rooms</p>
              </Box>
            </Box>
            <Box className="home-grid-box-5" elevation={1} component={Paper}>
              <Box sx={{ display: "flex" }}>
                <HomeIcon
                  backgroundColor="blue"
                  color="green"
                  sx={{ marginRight: "15px" }}
                />
                <p>Rooms</p>
              </Box>
            </Box>
          </div>
        </div>
      </main>
    </div>
  );
}
