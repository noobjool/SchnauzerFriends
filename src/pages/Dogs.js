import React from "react";
import { Container, Typography } from "@material-ui/core";
import DogData from "../components/DogData";

function Dogs() {
  return (
    <Container align="center">
      <Typography variant="h2" align="center" paragraph="true">
        Welcome to Schnauzer Friends
      </Typography>
      <DogData />
    </Container>
  );
}

export default Dogs;
