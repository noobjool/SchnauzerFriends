import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
    minWidth: 300,
  },
  media: {
    height: 300,
  },
});

const DogCard = ({ image }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia image={image} className={classes.media} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Namn
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ras
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DogCard;
