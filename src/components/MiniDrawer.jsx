import React from "react";
import { connect } from "react-redux";
import { setState } from "../store/actions/main";
import { useLocation, useHistory } from "react-router-dom";
import { kDrawerWidth } from "../constants";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// static images
import windowOutline from "../static/images/window-outline.png";
import clipboard from "../static/images/clipboard-square-symbol.png";
import email from "../static/images/opened-email-outlined-envelope-back-interface-symbol.png";
import calendar from "../static/images/weekly-calendar-outline-event-interface-symbol.png";
import user from "../static/images/user-outline-male-symbol-of-interface.png";
import chat from "../static/images/chat-oval-speech-bubbles-symbol.png";
import gear from "../static/images/gear-outlined-symbol.png";

const kDrawerIconSize = 17;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: kDrawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  root: {
    background:
      "transparent linear-gradient(180deg, #FFFFFF 0%, #EBFEFC 43%, #35DCCF 96%, #35F2E3 100%) 0% 0% no-repeat padding-box",
  },
  drawerOpen: {
    width: kDrawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  staticIcon: {
    width: kDrawerIconSize,
    height: kDrawerIconSize,
  },
  listItem: {
    justifyContent: "center",
    height: 53,
    margin: "1rem 0",
    "&:hover": {
      background: "#3f78d929",
    },
  },
  selected: {
    background: "#3f78d929",
    borderLeft: "3px solid #4078d9b3",
  },
}));

const MiniDrawer = ({ open, setState }) => {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const history = useHistory();

  const handleDrawerClose = () => {
    setState({ drawerOpen: false });
  };

  const handleRouteChange = (path) => {
    history.push(path);
  };

  const listItems = [
    {
      path: "/",
      image: windowOutline,
    },
    {
      path: "/patients",
      image: clipboard,
    },
    {
      path: "",
      image: email,
    },
    {
      path: "",
      image: calendar,
    },
    {
      path: "",
      image: user,
    },
    {
      path: "",
      image: chat,
    },
    {
      path: "",
      image: gear,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx(classes.root, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {listItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={handleRouteChange.bind(this, item.path)}
            className={clsx(classes.listItem, {
              [classes.selected]: item.path === location.pathname,
            })}
          >
            <img className={classes.staticIcon} src={item.image} alt="" />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  open: state.main.drawerOpen,
});

const mapDispatchToProps = { setState };

export default connect(mapStateToProps, mapDispatchToProps)(MiniDrawer);
