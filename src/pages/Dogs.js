import React from "react";
import { Button, Container } from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import { makeStyles } from "@material-ui/core/styles";
import DogData from "../components/DogData";

const useStyles = makeStyles({
  btn: {
    margin: 20,
  },
});

function Dogs() {
  const classes = useStyles();

  return (
    <Container align="center">
      <Button
        href="/dogs"
        size="large"
        variant="contained"
        color="primary"
        startIcon={<PetsIcon />}
        className={classes.btn}
      >
        Click to meet more of my friends!
      </Button>
      <DogData />
    </Container>
  );
}

export default Dogs;
