import React, { useState } from "react";
import "./style.css";
import ResponsiveDrawer from "../components/Drawer";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "../dash.css";
import HailIcon from "@mui/icons-material/Hail";
import { Container, Box, Typography, Grid, Card, CardContent, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { green, pink, yellow, orange } from '@mui/material/colors';
import { AccessTime, WbSunny, Person, MedicalServices, Report, Assessment, RestaurantMenu, Star } from '@mui/icons-material';

import { useNavigate } from "react-router-dom";
// import { Typography } from "@mui/material";
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


  const data = [
    { title: '25 Children', subtitle: '25 Staff', icon: <Person /> },
    { title: '5 Children', subtitle: '2 Staff', icon: <Person />, color: pink[500] },
    { title: '27 Children', subtitle: '11 Staff', icon: <Person />, color: green[500] },
    { title: '7 Children', subtitle: '', icon: <WbSunny />, color: yellow[700] }
  ];

  const rooms = [
    { name: 'Dream Space', children: 20, staff: 10 },
    { name: 'Dream Space', children: 20, staff: 10 },
    { name: 'Dream Space', children: 20, staff: 10 },
  ];

  const tasks = [
    { text: '2 Medication form overview', icon: <MedicalServices />, color: green[100] },
    { text: '4 Accident in the 7 days', icon: <Report />, color: pink[100] },
    { text: '1 assessment pending review', icon: <Assessment />, color: yellow[100] },
    { text: '5 Food form overview', icon: <RestaurantMenu />, color: orange[100] },
  ];
  return (
    <div style={{ backgroundColor: "#FBFBFB", minHeight: "100vh" }}>
      <ResponsiveDrawer appBarPageName={"home"} />
      <main style={{ marginTop: "80px" }}>
        <div className="container mt-5">
          <h1 style={{ textAlign: "start", marginBottom: 30, fontWeight: 400, marginLeft:"130px" }}>
            Good Morning ,Sofa
          </h1>
          <h5 style={{ textAlign: "start", marginBottom: 30, fontWeight: 500 , marginLeft:"130px" }}>
            Site Overview
          </h5>
          <Container style={{ marginLeft:"110px" }}>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}  >
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: item.color || green[500], mr: 2 }}>
                  {item.icon}
                </Avatar>
                <div>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography color="textSecondary">{item.subtitle}</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box>
      
     
      </Box>
    
    </Container>
          <div className="home-grid">
      
            <div className="home-grid-box-2" >
              <Paper
                elevation={2}
                square={false}
                sx={{
                  display: "flex",
                  padding: "15px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  backgroundColor: "#BBEC6C",
                  alignItems: "center",
                }}
              >
                <HailIcon backgroundColor="blue" color="green" />
                <Typography variant="h6">2 Medication form overview</Typography>
              </Paper>
              <Paper
                elevation={2}
                square={false}
                sx={{
                  display: "flex",
                  padding: "15px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  backgroundColor: "#8AC9FE",
                  alignItems: "center",
                }}
              >
                <HailIcon backgroundColor="blue" color="green" />
                <Typography variant="h6">4 Accident in the 7 days</Typography>
              </Paper>
              <Paper
                elevation={2}
                square={false}
                sx={{
                  display: "flex",
                  padding: "15px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  backgroundColor: "#F6A7D2",
                  alignItems: "center",
                }}
              >
                <HailIcon backgroundColor="blue" color="green" />
                <Typography variant="h6">2 Medication form overview</Typography>
              </Paper>
              <Paper
                elevation={2}
                square={false}
                sx={{
                  display: "flex",
                  padding: "15px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  backgroundColor: "#FEE140",
                  alignItems: "center",
                }}
              >
                <HailIcon backgroundColor="blue" color="green" />
                <Typography variant="h6">2 Medication form overview</Typography>
              </Paper>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
