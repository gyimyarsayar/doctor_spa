import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({}));

const Home = () => {
  const classes = useStyles();

  return <Typography paragraph>Home</Typography>;
};

export default Home;
