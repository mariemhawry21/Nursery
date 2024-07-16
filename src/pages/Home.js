import React, { useState } from "react";
import "./style.css";
import ResponsiveDrawer from "../components/Drawer";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "../dash.css";
import HailIcon from "@mui/icons-material/Hail";

import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
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

  return (
    <div style={{ backgroundColor: "#FBFBFB", minHeight: "100vh" }}>
      <ResponsiveDrawer />
      <main style={{ marginTop: "80px" }}>
        <div className="container mt-5">
          <h1 style={{ textAlign: "start", marginBottom: 30, fontWeight: 400 }}>
            Good Morning ,Sofa
          </h1>
          <h5 style={{ textAlign: "start", marginBottom: 30, fontWeight: 500 }}>
            Site Overview
          </h5>
          <div className="home-grid">
            <div className="home-grid-box">
              <Paper
                elevation={2}
                square={false}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  width: "100%",
                  marginRight: "10px",
                  borderRadius: "10px",
                }}
              >
                <HailIcon backgroundColor="green" fontSize="large" />
                <div
                  className="flex flex-column "
                  style={{
                    textAlign: "start",
                    marginLeft: "20px",
                  }}
                >
                  <Typography variant="h6">25 children</Typography>
                  <Typography variant="h6">25 staff</Typography>
                </div>
              </Paper>
              <Paper
                elevation={2}
                square={false}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  width: "100%",
                  marginRight: "10px",
                  borderRadius: "10px",
                }}
              >
                <HailIcon backgroundColor="green" fontSize="large" />
                <div
                  className="flex flex-column "
                  style={{
                    textAlign: "start",
                    marginLeft: "20px",
                  }}
                >
                  <Typography variant="h6">25 children</Typography>
                  <Typography variant="h6">25 staff</Typography>
                </div>
              </Paper>
              <Paper
                elevation={2}
                square={false}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <HailIcon backgroundColor="green" fontSize="large" />
                <div
                  className="flex flex-column "
                  style={{
                    textAlign: "start",
                    marginLeft: "20px",
                  }}
                >
                  <Typography variant="h6">25 children</Typography>
                  <Typography variant="h6">25 staff</Typography>
                </div>
              </Paper>
            </div>
            <div className="home-grid-box-2">
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
