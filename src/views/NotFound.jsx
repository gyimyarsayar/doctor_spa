import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%)"
  }
}));

const NotFound = () => {
  const classes = useStyles();

  return <h2 className={classes.root}>404 Not Found</h2>;
};

export default NotFound;
