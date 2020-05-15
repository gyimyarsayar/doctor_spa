import React, { useState } from "react";
import { connect } from "react-redux";
import { setState } from "../store/actions/main";
import { kDrawerWidth } from "../constants";
import clsx from "clsx";
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
    backgroundColor: "#35DCCF",
    boxShadow: "0px 2px 6px #0000000A",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: kDrawerWidth,
    width: `calc(100% - ${kDrawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
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
  hide: {
    display: "none"
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

const Appbar = ({ setState, drawerOpen }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setState({ drawerOpen: true });
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, {
              [classes.hide]: drawerOpen
            })}
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

const mapStateToProps = (state) => ({
  drawerOpen: state.main.drawerOpen
});

const mapDispatchToProps = { setState };

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
