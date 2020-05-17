import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import OverviewCard from "../components/home/OverviewCard";
import BudgetCard from "../components/home/BudgetCard";

import doctor from "../static/images/Group 2765.png";
import nurse from "../static/images/Group 2660.png";
import heart from "../static/images/Group 2659.png";
import pharmastist from "../static/images/Group 2655.png";
import Laboratorst from "../static/images/Intersection 7.png";
import accountants from "../static/images/Intersection 6.png";
import operation from "../static/images/Intersection 9.png";
import birth from "../static/images/Symbol 2 – 1.png";
import death from "../static/images/Group 2664.png";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    fontFamily: "SourceSansPro"
  }
}));

const Home = () => {
  const classes = useStyles();

  const overviews = [
    {
      name: "Doctors",
      count: 20,
      img: doctor
    },
    {
      name: "Nurses",
      count: 25,
      img: nurse
    },
    {
      name: "Patient",
      count: 50,
      img: heart
    },
    {
      name: "Pharmastist",
      count: 10,
      img: pharmastist
    },
    {
      name: "Laboratorst",
      count: 4,
      img: Laboratorst
    },
    {
      name: "Accountants",
      count: 4,
      img: accountants
    },
    {
      name: "Operation",
      count: 50,
      img: operation
    },
    {
      name: "Birth Report",
      count: 2,
      img: birth
    },
    {
      name: "Death Reports",
      count: 0,
      img: death
    }
  ];

  const titlePaddingBottom = "1.5rem";

  return (
    <Grid container spacing={3} style={{ margin: 0 }}>
      <Grid item xs={8}>
        <Typography
          style={{ paddingBottom: titlePaddingBottom }}
          className={classes.title}
        >
          Overview
        </Typography>
        <Grid
          container
          item
          xs={12}
          spacing={3}
          justify="space-between"
          style={{ marginRight: 12 }}
        >
          {overviews.map((overview, i) => (
            <Grid style={{ paddingBottom: 0 }} item key={i}>
              <OverviewCard
                name={overview.name}
                count={overview.count}
                img={overview.img}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item sm={12} md={4}>
        <Typography
          style={{ paddingBottom: titlePaddingBottom }}
          className={classes.title}
        >
          Budget Report
        </Typography>
        <BudgetCard
          header="Hospital"
          footer="Budget"
          count="35,604,000.00"
          percent="40"
        />
      </Grid>
    </Grid>
  );
};

export default Home;
