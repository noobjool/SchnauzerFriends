import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import billie from "../assets/billie.png";

const useStyles = makeStyles({
  typography: {
    paddingTop: 20,
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Container align="center">
      <div>{children}</div>
      <Typography
        variant="h2"
        align="center"
        paragraph="true"
        className={classes.typography}
      >
        Welcome to Schnauzer Friends
      </Typography>
      <img src={billie} alt="Schnauzer" width="150px" />
    </Container>
  );
};

export default Layout;
