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

  const checkBreed = (text, breed) => {
    return text.indexOf(breed) > 0;
  };

  useEffect(() => {
    axios("https://dog.ceo/api/breed/schnauzer/images/random/5").then((res) => {
      setDogs(res.data.message);
    });
  }, []);

  return (
    <Container className={classes.root}>
      {dogs.map((dogImage, index) => {
        const name = dogNames.allRandom();
        let breed = "Schnauzer";
        if (checkBreed(dogImage, "miniature")) {
          breed = "Miniature Schnauzer";
        }
        if (checkBreed(dogImage, "giant")) {
          breed = "Giant Schnauzer";
        }

        return (
          <DogCard name={name} image={dogImage} breed={breed} key={index} />
        );
      })}
    </Container>
  );
};

export default DogData;
