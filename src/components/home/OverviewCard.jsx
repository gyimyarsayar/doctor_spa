import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#FFFFFF",
    boxShadow: "0px 2px 6px #0000000A",
    borderRadius: 4,
    height: 85,
    padding: "0 1.1rem",
    boxSizing: "border-box",
    minWidth: 214
  },
  label: {
    fontSize: 15,
    color: "#8288AC",
    letterSpacing: 0
  },
  grid: {
    flexGrow: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  }
}));

const OverviewCard = ({ name, count, img }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container className={classes.grid}>
        <Grid direction="column">
          <Typography className={classes.label}>{count}</Typography>
          <Typography className={classes.label}>{name}</Typography>
        </Grid>
        <Grid>
          <img src={img} alt="" />
        </Grid>
      </Grid>
    </Card>
  );
};

export default OverviewCard;
