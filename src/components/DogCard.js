import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

let theme = createMuiTheme();

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
    minWidth: 180,
    [theme.breakpoints.down("xs")]: {
      minWidth: 250,
    },
  },
  media: {
    height: 180,
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
});

const DogCard = ({ name, image, breed }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia image={image} className={classes.media} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {breed}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DogCard;
