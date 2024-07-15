import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputLabel, FormControl, Input, InputAdornment } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import logo from "../logo.svg";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [linkEnabled, setLinkEnabled] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
    checkInputValues(value, password);
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    checkInputValues(username, value);
  };

  const checkInputValues = (username, password) => {
    // Check if both username and password fields are not empty
    if (username.trim() !== "" && password.trim() !== "") {
      setLinkEnabled(true); // Enable the link
    } else {
      setLinkEnabled(false); // Disable the link
    }
  };

  return (
    <div className="all-login">
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "#fff" }}>
          <div
            className="col-md-6"
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="col-md-8  ml-auto mr-auto login-edit">
              <div className="d-flex flex-row align-items-center  mb-5">
                <img src={logo} alt="logo" />
                <h3
                  className="text-center mb-4"
                  style={{
                    fontWeight: "500",
                    color: "#225C8B",
                    fontSize: 54,
                    marginLeft: 22,
                  }}
                >
                  Rouse Berry
                </h3>
              </div>

              <form>
                <FormControl
                  variant="standard"
                  style={{ width: "100%", marginBottom: 40 }}
                >
                  <label
                    className="d-flex"
                    style={{
                      justifyContent: "start",
                      color: "#999999",
                      marginBottom: "-10px",
                    }}
                    for="username"
                  >
                    Email
                  </label>
                  <Input
                    class="form-control "
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter your email address"
                    style={{ color: "black" }}
                    startAdornment={
                      <InputAdornment position="start" sx={{ color: "black" }}>
                        <MailOutlineIcon />
                      </InputAdornment>
                    }
                    sx={{
                      color: "black",
                      "& .MuiInputAdornment-root": { color: "black" },
                      "&::placeholder": { color: "black" },
                    }}
                  />
                </FormControl>
                <FormControl
                  style={{ width: "100%", marginBottom: 20 }}
                  variant="standard"
                >
                  <label
                    for="password"
                    style={{
                      color: "#999999",
                      alignSelf: "start",
                      marginBottom: "-10px",
                    }}
                  >
                    Password
                  </label>
                  <Input
                    class="form-control"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    startAdornment={
                      <InputAdornment position="start" color="black">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{
                      color: "black",
                      "& .MuiInputAdornment-root": { color: "black" },
                      "&::placeholder": { color: "black" },
                    }}
                  />
                </FormControl>
                <div>
                  {/* Disable the link when the fields are empty */}
                  {linkEnabled ? (
                    <Link to="/home" className="text-decoration">
                      <button
                        type="submit"
                        class="btn  btn-block text-center mb-2 text-white"
                        style={{
                          backgroundColor: "#225C8B",
                          color: "white",
                          borderRadius: "32px",
                          padding: "10px",
                        }}
                      >
                        Login
                      </button>
                    </Link>
                  ) : (
                    <button
                      type="submit"
                      class="btn  btn-block text-center mb-2"
                      disabled
                      style={{
                        backgroundColor: "#225C8B",
                        color: "white",
                        borderRadius: "32px",
                        padding: "10px",
                      }}
                    >
                      Login
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="d-none d-md-block col-md-6">
            <img
              src="\imgs\log.png"
              className=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
