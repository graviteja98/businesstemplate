import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet, useNavigate } from "react-router";
import {
  CssBaseline,
  Drawer,
  Grid,
  InputAdornment,
  Popover,
  TextField,
  useMediaQuery,
} from "@mui/material";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import List from "@mui/material/List";
import CampaignIcon from "@mui/icons-material/Campaign";
import { ContactMail, Event, Home, InfoRounded } from "@mui/icons-material";
export default function Appbar() {
  const [search, setSearch] = useState("");
  const ismallScreen = useMediaQuery("(max-width:600px)");
  console.log(ismallScreen);
  const [draw, setDraw] = useState(false);
  const drawerWidth = 240;
  const navigate = useNavigate();
  const Icons = [<Home />, <InfoRounded />, <Event />, <ContactMail />];
  // const [showDrop, setShowDrop] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const showDrop = Boolean(anchorEl);
  return (
    <Box sx={{ flexGrow: 1 }} alignContent={"center"}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.appBar,
          height: "3.5em",
          alignContent: "center",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="flex-start">
            {/* Left-side items */}
            <Grid item alignContent="flex-start">
              <IconButton
                size="small"
                color="black"
                onClick={() => navigate("/")}
              >
                <CampaignIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Button
                onClick={() => navigate("/")}
                startIcon={<CampaignIcon />}
              >
                <Typography variant={"body2"} color="black" fontWeight={600}>
                  Marcon Agency
                </Typography>
              </Button>
            </Grid>
          </Grid>

          {/* Right-side items */}
          <Grid container justifyContent="flex-end" alignItems="center">
            {!ismallScreen && (
              <>
                <Grid item>
                  <Button color="inherit" onClick={() => navigate("/")}>
                    Home
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="inherit" onClick={() => navigate("about")}>
                    About
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="inherit"
                    onClick={(e) => handlePopoverOpen(e)}
                    // aria-owns={showDrop ? "hover-menu" : undefined}
                    // aria-haspopup="true"
                    // onMouseEnter={(e) => handlePopoverOpen(e)}
                    // onMouseLeave={(e) => handlePopoverClose(e)}
                  >
                    Event
                  </Button>

                  <Popover
                    open={showDrop}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                   
                  >
                    <List  sx={{ backgroundColor : 'primary.main'}}>
                      <ListItemButton onClick={()=>{navigate('event')}}>
                        <ListItemText primary="Option 1" />
                      </ListItemButton>
                      <ListItemButton onClick={()=>{navigate('event')}}>
                        <ListItemText primary="Option 2" />
                      </ListItemButton>
                      <ListItemButton onClick={()=>{navigate('event')}}>
                        <ListItemText primary="Option 3" />
                      </ListItemButton>
                    </List>
                  </Popover>
                </Grid>
                <Grid item>
                  <Button color="inherit" onClick={() => navigate("contact")}>
                    Contact
                  </Button>
                </Grid>
                <Grid item>
                  <TextField
                    size="small"
                    fullWidth
                    type="text"
                    placeholder="Search"
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    InputProps={{
                      style: {
                        borderRadius: "4em",
                        backgroundColor: "whitesmoke",
                        height: "2em",
                        borderWidth: "1em",
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                </Grid>{" "}
              </>
            )}

            <Grid item>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 2 }}
                onClick={() => setDraw(!draw)}
              >
                <MoreVertIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={draw}
        onClose={() => {
          setDraw(false);
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Home", "About", "Event", "Contact"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{Icons[index]}</ListItemIcon>
                  <ListItemText
                    primary={text}
                    onClick={() => {navigate(text.toLowerCase()); setDraw(false)}}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ mt: 9 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
