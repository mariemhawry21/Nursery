import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../logo.svg";
import flag from "../flag.png";
import intro from "../intro.svg";
import { useNavigate } from "react-router";
const Intro = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#FBFBFB", height: "100vh" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} alt="logo" style={{ width: "50px" }} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#225C8B" }}
            >
              Rouse Berry
            </Typography>
            <Button
              style={{
                backgroundColor: "#225C8B",
                color: "#fff",
                borderRadius: "15px",
                textTransform: "capitalize",
                fontWeight: 600,
                padding: "5px 20px 5px 20px",
                marginRight: 30,
              }}
              onClick={() => navigate("/login")}
            >
              Log in
            </Button>
            <img
              src={flag}
              alt="flag"
              style={{ width: "30px", marginRight: 20 }}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "#225C8B", fontWeight: 700, width: "40%" }}
          >
            "Nurturing Seeds, Harvesting Blossoms"
          </Typography>
          <Box sx={{ textAlign: "end" }}>
            <img src={intro} alt="intro-image" style={{ width: "80%" }} />
          </Box>
          <button
            class="btn  btn-block text-center mb-2 text-white"
            style={{
              backgroundColor: "#225C8B",
              color: "white",
              borderRadius: "32px",
              padding: "10px",
              width: "250px",
            }}
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
        </Box>
      </Box>
    </div>
  );
};

export default Intro;
