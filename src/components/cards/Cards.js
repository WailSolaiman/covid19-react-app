import React from "react";
import { Grid } from "@material-ui/core";

import Card from "./Card";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <p>...Loading</p>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card
          title="Infected"
          cases={confirmed.value}
          date={new Date(lastUpdate).toDateString()}
          subtitle="Number of active cases of COVID-19"
          style={styles.infected}
        />
        <Card
          title="Recovered"
          cases={recovered.value}
          date={new Date(lastUpdate).toDateString()}
          subtitle="Number of recoveries from COVID-19"
          style={styles.recovered}
        />
        <Card
          title="Deaths"
          cases={deaths.value}
          date={new Date(lastUpdate).toDateString()}
          subtitle="Number of deaths caused by COVID-19"
          style={styles.deaths}
        />
      </Grid>
    </div>
  );
};

export default Cards;
