import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Doughnut } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 305,
    height: 293,
    padding: theme.spacing(3),
    boxShadow: "0px 2px 6px #0000000A",
    borderRadius: 4,
    boxSizing: "border-box"
  },
  title: {
    fontSize: 15,
    color: "#8288AC"
  },
  count: {
    fontSize: 12,
    color: "#4AD991"
  }
}));

const BudgetCard = ({ header, footer, count, percent }) => {
  const classes = useStyles();
  const data = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#a3a1fb", "#edecfe"]
      }
    ]
  };

  return (
    <Card className={classes.card}>
      <Grid
        style={{ height: "100%" }}
        container
        direction="column"
        justify="space-between"
      >
        <Grid item>
          <Typography
            className={classes.title}
            style={{ marginBottom: ".3rem" }}
          >
            {header}
          </Typography>
          <Divider />
        </Grid>
        <Grid item>
          <Doughnut
            data={data}
            width={2}
            height={1}
            options={{
              cutoutPercentage: 80,
              responsive: true,
              maintainAspectRatio: true
            }}
          />
        </Grid>
        <Grid item>
          <Divider />
          <Grid
            style={{ marginTop: ".3rem" }}
            container
            item
            justify="space-between"
            alignItems="baseline"
          >
            <Typography className={classes.title}>{footer}</Typography>
            <Typography className={classes.count}>{count}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default BudgetCard;
