import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import OverviewCard from "../components/home/OverviewCard";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    fontFamily: "SourceSansPro"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} style={{ margin: 0 }}>
      <Grid item xs={8}>
        <Typography className={classes.title}>Overview</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.title}>Budget Report</Typography>
      </Grid>
      <Grid item>
        <OverviewCard />
      </Grid>
    </Grid>
  );
};

export default Home;
