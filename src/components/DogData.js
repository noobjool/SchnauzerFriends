import React, { useState, useEffect } from "react";
import axios from "axios";
import DogCard from "./DogCard";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dogNames from "dog-names";

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
    axios("https://dog.ceo/api/breed/schnauzer/images/random/5").then((res) => {
      setDogs(res.data.message);
    });
  }, []);

  return (
    <Container className={classes.root}>
      {dogs.map((dogImage, index) => {
        const name = dogNames.allRandom();

        const indexBreed = dogImage.indexOf("miniature");
        const breed =
          indexBreed > 0 ? "Miniature Schnauzer" : "Giant Schnauzer";

        return (
          <DogCard name={name} image={dogImage} breed={breed} key={index} />
        );
      })}
    </Container>
  );
};

export default DogData;
