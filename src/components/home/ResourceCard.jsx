import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Doughnut } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 15,
    color: "#8288AC"
  },
  card: {
    minWidth: 1152,
    height: 214,
    boxShadow: " 0px 2px 6px #0000000A",
    borderRadius: 4,
    width: 1505
  }
}));

const ResourceCard = () => {
  const classes = useStyles();

  return <Card className={classes.card}></Card>;
};

export default ResourceCard;
