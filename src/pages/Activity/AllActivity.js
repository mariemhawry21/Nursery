import React from "react";

import { Button, Box } from "@mui/material";
// import { Link } from "react-router-dom";

import OnlyDrawer from "../../components/OnlyDrawer";

import ActivityList from "./ActivityList";
import FoodIcon from "@mui/icons-material/Restaurant";
import SleepIcon from "@mui/icons-material/Hotel";
import DiaperIcon from "@mui/icons-material/BabyChangingStation";
import AccidentIcon from "@mui/icons-material/Healing";
import LearningIcon from "@mui/icons-material/School";
import DrinkIcon from "@mui/icons-material/LocalDrink";
import SidebarIcon from "../../components/SidebarIcon";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Grid, TextField, MenuItem, InputAdornment  } from '@mui/material';
import {  CalendarToday } from '@mui/icons-material';
import { Search, Add} from '@mui/icons-material';
export default function AllActivity() {

  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        backgroundColor:"#FBFBFB",
      }}
    >
      <Box sx={{ display: "flex", padding: "10px" }}>
        <nav style={{ display: "flex" }}>
          <SidebarIcon />
          <Box sx={{ display: "flex", marginLeft: "200px" }}>
          
          <Container>
        <Box sx={{ width: '100%', maxWidth: '1200px', margin: 'auto', mb: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <TextField 
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                  sx: {
                    width: 300,
                    height: 40,
                    borderRadius: 1,
                    borderColor: '#ccc',
                    '&:hover fieldset': {
                      borderColor: '#999',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#666',
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ccc',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField 
                variant="outlined"
                type="date"
                defaultValue="2024-07-21"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarToday />
                    </InputAdornment>
                  ),
                  sx: {
                    width: 170,
                    height: 40,
                    borderRadius: 1,
                    borderColor: '#ccc',
                    '&:hover fieldset': {
                      borderColor: '#999',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#666',
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ccc',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                select
                variant="outlined"
                defaultValue="All Rooms"
                InputProps={{
                  sx: {
                    width: 160,
                    height: 40,
                    borderRadius: 1,
                    borderColor: '#ccc',
                    '&:hover fieldset': {
                      borderColor: '#999',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#666',
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ccc',
                    },
                  },
                }}
              >
                <MenuItem value="All Rooms">All Rooms</MenuItem>
                {/* Add more options as needed */}
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                select
                variant="outlined"
                defaultValue="All Days"
                InputProps={{
                  sx: {
                    width: 160,
                    height: 40,
                    borderRadius: 1,
                    borderColor: '#ccc',
                    '&:hover fieldset': {
                      borderColor: '#999',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#666',
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ccc',
                    },
                  },
                }}
              >
                <MenuItem value="All Days">All Days</MenuItem>
                {/* Add more options as needed */}
              </TextField>
            </Grid>
            {/* <Grid item>
              <Button
                variant="contained"
                sx={{
                  width: 80,
                  height: 40,
                  backgroundColor: '#295EA7',
                  '&:hover': {
                    backgroundColor: '#1E4D86',
                  },
                }}
              >
                Go
              </Button>
            </Grid> */}
          </Grid>
        </Box>

      </Container>

          </Box>
        </nav>
        <OnlyDrawer />
      </Box>
      <div className="activity">
      <Box sx={{ marginLeft: 15 }}
      display="flex"
      justifyContent="space-around"
      marginBottom={"30px"}
      width={"100%"}
      marginLeft={"150px"}
    >
      <Button
        style={{ width: "164px", height: "86px", borderRadius: "20px", padding: "12px 50px 10px 50px", gap: "0px" }}
        sx={{
          backgroundColor: "#D7FFE9",
          color: "#000000",
          flexDirection: "column",
          margin: "0 10px",
          "&:hover": {
            backgroundColor: "#D7FFE9",
          },
        }}
      >
        <FoodIcon sx={{ marginBottom: 1, color: "#4CAF50" }} />
        +Food
      </Button>
      <Button
        style={{ width: "164px", height: "86px", borderRadius: "20px", padding: "12px 50px 10px 50px" }}
        sx={{
          backgroundColor: "#FFD8E1",
          color: "#000000",
          flexDirection: "column",
          margin: "0 10px",
          "&:hover": {
            backgroundColor: "#FFD8E1",
          },
        }}
      >
        <SleepIcon sx={{ marginBottom: 1, color: "#EE1F50" }} />
        +Sleep
      </Button>
      <Button
        style={{ width: "164px", height: "86px", borderRadius: "20px", padding: "12px 50px 10px 50px" }}
        sx={{
          backgroundColor: "#D0DFFC",
          color: "#000000",
          flexDirection: "column",
          margin: "0 10px",
          "&:hover": {
            backgroundColor: "#D0DFFC",
          },
        }}
      >
        <DiaperIcon sx={{ marginBottom: 1, color: "#225C8B" }} />
        +Diaper
      </Button>
      <Button
        style={{ width: "164px", height: "86px", borderRadius: "20px", padding: "12px 50px 10px 50px" }}
        sx={{
          backgroundColor: "#F9D7FF",
          color: "#000000",
          flexDirection: "column",
          margin: "0 10px",
          "&:hover": {
            backgroundColor: "#F9D7FF",
          },
        }}
      >
        <AccidentIcon sx={{ marginBottom: 1, color: "#B9067C" }} />
        +Accident
      </Button>
      <Button
        style={{ width: "164px", height: "86px", borderRadius: "20px", padding: "12px 50px 10px 50px", gap: "0px" }}
        sx={{
          backgroundColor: "#FFEFB8",
          color: "#000000",
          flexDirection: "column",
          margin: "0 10px",
          "&:hover": {
            backgroundColor: "#FFEFB8",
          },
        }}
      >
        <LearningIcon sx={{ marginBottom: 1, color: "#FE9738" }} />
        +Learning
      </Button>
      <Button
        style={{ width: "164px", height: "86px", padding: "12px 50px 10px 50px", borderRadius: "20px", gap: "3px" }}
        sx={{
          backgroundColor: "#cffff9",
          color: "#000000",
          flexDirection: "column",
          margin: "0 10px",
          "&:hover": {
            backgroundColor: "#cffff9",
          },
        }}
      >
        <DrinkIcon sx={{ marginBottom: 1, color: "#00BCD4" }} />
        +Drink
      </Button>
    </Box>


      
   
        <Box width={"1200px"} marginLeft={"140px"} >
          <div>
            <Link to="/AddChild">
            
            

            <Grid item>
            <Button variant="contained"  startIcon={<Add /> } style={{marginLeft:"978px", marginTop:"-30px", backgroundColor:"#225C8B"}}>Children</Button>
          </Grid>
            </Link>
          </div>
          <ActivityList />
        </Box>
      </div>
    </div>
  );
}
