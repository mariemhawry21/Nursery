import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import InputBase from "@mui/material/InputBase";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../logo.svg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { useNavigate } from "react-router";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import FeedIcon from "@mui/icons-material/Feed";
import { useDrawer } from "../Contexts/DrawerProvider";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function OnlyDrawer() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { open, handleDrawerClose } = useDrawer();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
            marginTop: "15px",
            justifyContent: "center",
          }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <img src={logo} alt="logo" width={"50px"} />
          <Typography
            variant="h5"
            color={"#225C8B"}
            marginLeft={"10px"}
            fontWeight="500"
          >
            Rouse Berry
          </Typography>
        </Box>
        <List>
          <ListItem disablePadding onClick={() => navigate("/home")}>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/AllChild")}>
            <ListItemButton>
              <ListItemIcon>
                <FamilyRestroomIcon />
              </ListItemIcon>
              <ListItemText primary="Children" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate("/AllStaff")}>
            <ListItemButton>
              <ListItemIcon>
                <FolderSharedIcon />
              </ListItemIcon>
              <ListItemText primary="Staff" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate("/AllRoom")}>
            <ListItemButton>
              <ListItemIcon>
                <BedroomParentIcon />
              </ListItemIcon>
              <ListItemText primary="Room" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate("/AllActivity")}>
            <ListItemButton>
              <ListItemIcon>
                <StackedLineChartIcon />
              </ListItemIcon>
              <ListItemText primary="Activity" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate("/Message")}>
            <ListItemButton>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary="Conversation" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={() => navigate("/booking")}>
            <ListItemButton>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText primary="Booking" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
