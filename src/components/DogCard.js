import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
    minWidth: 180,
  },
  media: {
    height: 180,
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
