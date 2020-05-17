import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Polar } from "react-chartjs-2";

import Ellipse from "./Ellipse";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 15,
    color: "#8288AC",
    fontWeight: "bold"
  },
  count: {
    fontSize: 15,
    color: "#8288ac80"
  },
  card: {
    maxWidth: 1152,
    minHeight: 214,
    boxShadow: " 0px 2px 6px #0000000A",
    borderRadius: 4,
    width: "100%"
  }
}));

const ResourceCard = () => {
  const classes = useStyles();
  const data = {
    datasets: [
      {
        data: [10, 20, 30, 40],
        backgroundColor: ["#C4C3FF", "#FFE2A0", "#FFA195", "#95E7FF"]
      }
    ]
  };

  return (
    <Card className={classes.card}>
      <Grid container alignItems="center" style={{ height: 214 }}>
        {["", "", ""].map((item, i) => (
          <Grid container xs={4} item alignItems="center" key={i}>
            <Grid xs={12} md={8} item style={{ marginLeft: "-2.5rem" }}>
              <Polar data={data} />
            </Grid>
            <Grid item>
              {["#95E7FF", "#FFA195", "#FFE2A0", "#C4C3FF"].map((color, i) => (
                <Typography key={i} style={{ marginBottom: ".4rem" }}>
                  <Ellipse color={color} />{" "}
                  <span className={classes.title}>medicine</span>{" "}
                  <span className={classes.count}>10000</span>
                </Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default ResourceCard;
