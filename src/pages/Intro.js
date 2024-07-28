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
import pc from "../imgs/labtop.png";
import introBackGround from "../imgs/introBackGround.svg";
import { useNavigate } from "react-router";
const Intro = () => {
  const navigate = useNavigate();
  return (
    <div
      className="intro"
      style={{
        height: "100vh",
      }}
    >
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
        className="box"
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
            flexDirection: "row",
            justifyContent: "center",
            zIndex: 3,
            overflow: "hidden",
          }}
        >
          <Box sx={{ textAlign: "start", width: "50%", padding: "20px" }}>
            <Typography
              variant="h3"
              sx={{ color: "#225C8B", fontWeight: 700, marginLeft: "20px" }}
            >
              "Nurturing Seeds, Harvesting Blossoms"
            </Typography>
            <Typography
              sx={{ color: "#0F283C", fontWeight: "bold", fontSize: "30px" }}
            >
              We are committed to providing a safe and stimulating environment
              for your children.
            </Typography>
            <button
              class="btn  btn-block text-center mb-2 text-white"
              style={{
                backgroundColor: "#225C8B",
                color: "white",
                padding: "10px",
                width: "220px",
                fontWeight: "600",
              }}
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          </Box>
          <Box>
            <img
              src={pc}
              alt="intro-image"
              style={{ width: "100%", marginLeft: "170px" }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Intro;
