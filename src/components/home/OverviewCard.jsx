import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 2px 6px #0000000A",
    borderRadius: 4,
    width: 214,
    height: 85
  }
}));

const OverviewCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent></CardContent>
    </Card>
  );
};

export default OverviewCard;
