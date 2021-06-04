import React from "react";
import { Container, Link } from "@material-ui/core";
import billie from "../assets/billie.png";

function Home() {
  return (
    <Container align="center">
      <img src={billie} alt="Schnauzer" width="200px" />
      <br />
      <Link href="/dogs">Click to meet my friends</Link>
    </Container>
  );
}

export default Home;
