import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ellipse: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    display: "inline-block"
  }
}));

const Ellipse = ({ color }) => {
  const classes = useStyles();

  return <span className={classes.ellipse} style={{ background: color }} />;
};

export default Ellipse;
