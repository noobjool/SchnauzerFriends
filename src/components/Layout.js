import React from "react";
import { Container, Typography } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import billie from "../assets/billie.png";

const LightTooltip = withStyles((theme) => ({
  arrow: {
    color: theme.palette.common.white,
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 18,
  },
}))(Tooltip);

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
      <LightTooltip title="Woff!" placement="left-start" arrow>
        <img src={billie} alt="Schnauzer" width="150px" />
      </LightTooltip>
    </Container>
  );
};

export default Layout;
