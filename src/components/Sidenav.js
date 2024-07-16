/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CategoryIcon from "@mui/icons-material/Category";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SailingIcon from "@mui/icons-material/Sailing";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PaymentIcon from "@mui/icons-material/Payment";
import { IconButton } from "@mui/material";
import AddHomeIcon from "@mui/icons-material/AddHome";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import GradingIcon from "@mui/icons-material/Grading";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import FeedIcon from "@mui/icons-material/Feed";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import FolderSharedIcon from "@mui/icons-material/FolderShared";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),

    position: "relative",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Sidenav() {
  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = React.useState(true); // Set to true to open by default

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#fff" }} position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            {/* <img style={{width:"10%"}} src='\imgs\orane.png'/> */}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }), color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        className="color"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: "#fff" }}>
          <IconButton sx={{ color: "#000" }} onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <img style={{ width: "64%" }} src="../logo.svg" />
        </DrawerHeader>
        <Divider />
        {/*                
<img style={{
              width:"50%",
              margin:"auto",
              borderRadius:"50%",
              backgroundColor:"#fff"}}
               src='https://nursary-new-dashboard.vercel.app/_next/image?url=%2Fsite-logo.png&w=384&q=75' /> */}

        <List>
          <ListItem
            className="dd"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/Home");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <AddHomeIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </AddHomeIcon>
              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <Accordion className="accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="dropdown-content"
              id="dropdown-header"
            >
              <ListItemButton sx={{ display: "contents" }}>
                <LibraryBooksIcon
                  sx={{
                    minwidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <InboxIcon />
                </LibraryBooksIcon>
                <ListItemText
                  primary="Booking"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem
                  className="dd"
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => {
                    navigate("/Invicing");
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 40,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <InsertInvitationIcon
                      sx={{
                        minwidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </InsertInvitationIcon>
                    <ListItemText
                      primary="Invicing"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem
                  className="dd"
                  disablePadding
                  sx={{ display: "block" }}
                  onClick={() => {
                    navigate("/Setting");
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <SettingsIcon
                      sx={{
                        minwidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </SettingsIcon>
                    <ListItemText
                      primary="Settings"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <ListItem
            className="dd"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/Feed");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <GradingIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </GradingIcon>
              <ListItemText primary="Feed" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            className="dd"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/Activity");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <StackedLineChartIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </StackedLineChartIcon>
              <ListItemText primary="Activity" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            className="dd"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/Messages");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <FeedIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </FeedIcon>
              <ListItemText primary="Messages" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            className="dd"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/Room");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <BedroomParentIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </BedroomParentIcon>
              <ListItemText primary="Room" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            className="dd"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/AllChild");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <EscalatorWarningIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </EscalatorWarningIcon>
              <ListItemText primary="Children" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            className="dd"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/AllStaff");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <FolderSharedIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </FolderSharedIcon>
              <ListItemText primary="Staff" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            className="dd"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/settings");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <SettingsIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </SettingsIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            className=" logout"
            disablePadding
            sx={{ display: "block", marginTop: "70%" }}
            onClick={() => {
              navigate("");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <LogoutIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </LogoutIcon>
              <ListItemText primary="Log Out" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        {/* <Divider /> */}
      </Drawer>
    </Box>
  );
}
