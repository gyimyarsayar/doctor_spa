import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import logo from "../static/images/Intersection 2@2x.png";

const kLogoSize = 55;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appBar: {
    backgroundColor: "#35DCCF"
  },
  logo: {
    width: kLogoSize,
    height: kLogoSize
  },
  profileName: {
    color: "#4078D9",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: theme.spacing(8)
  },
  splitter: {
    width: 1,
    height: 28,
    background: "#1279BA",
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3)
  },
  badge: {
    background:
      "transparent linear-gradient(180deg, #4078D9 0%, #3AB6DE 62%, #35F2E3 100%, #203C6D 100%) 0% 0% no-repeat padding-box",
    border: "2px solid #fff"
  }
}));

const Appbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <img className={classes.logo} src={logo} alt="Hospital Logo" />
          <div style={{ flexGrow: 1 }} />
          <Badge
            classes={{ badge: classes.badge }}
            color="primary"
            overlap="circle"
            variant="dot"
          >
            <NotificationsIcon fontSize="small" style={{ color: "#4078D9" }} />
          </Badge>
          <div className={classes.splitter} />
          <Typography className={classes.profileName}>Kyi</Typography>
          <ExpandMoreIcon style={{ color: "#4078D9" }} />
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle fontSize="large" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
