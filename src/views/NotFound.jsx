import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

  return (
    <Typography variant="h2" className={classes.root}>
      404 Not Found
    </Typography>
  );
};

export default NotFound;
