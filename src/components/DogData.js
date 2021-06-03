import React, { useState, useEffect } from "react";
import axios from "axios";
import DogCard from "./DogCard";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    gap: 10,
  },
});

const DogData = () => {
  const [dogs, setDogs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios("https://dog.ceo/api/breed/schnauzer/images/random/4").then((res) => {
      setDogs(res.data.message);
    });
  }, []);

  return (
    <Container className={classes.root}>
      {dogs.map((dogImage, index) => (
        <DogCard image={dogImage} key={index} />
      ))}
    </Container>
  );
};

export default DogData;
