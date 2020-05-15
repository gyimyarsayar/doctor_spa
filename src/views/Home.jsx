import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    fontFamily: "SourceSansPro"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid xs={8}>
        <Typography className={classes.title}>Overview</Typography>
      </Grid>
      <Grid>
        <Typography className={classes.title}>Budget Report</Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
