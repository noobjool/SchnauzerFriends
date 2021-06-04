import React from "react";
import { Container, Typography, Link } from "@material-ui/core";
import billie from "../assets/billie.png";

function Home() {
  return (
    <Container align="center">
      <Typography variant="h2" align="center" paragraph="true">
        Welcome to Schnauzer Friends
      </Typography>
      <img src={billie} alt="Schnauzer" width="200px" />
      <br />
      <Link href="/dogs">My friends</Link>
    </Container>
  );
}

export default Home;
