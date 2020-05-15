import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    fontFamily: "SourceSansPro"
  }
}));

const Home = () => {
  const classes = useStyles();

  return <Typography className={classes.title}>Overview</Typography>;
};

export default Home;
