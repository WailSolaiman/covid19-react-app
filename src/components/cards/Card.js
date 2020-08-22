import React from "react";
import {
  Card as CardItem,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Card.module.css";

const Card = ({
  title = "",
  cases = 0,
  date = "",
  subtitle = "",
  style = {},
}) => {
  return (
    <Grid
      item
      component={CardItem}
      xs={12}
      md={3}
      className={cx(styles.card, style)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={cases} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">{date}</Typography>
        <Typography variant="body2">{subtitle}</Typography>
      </CardContent>
    </Grid>
  );
};

export default Card;
