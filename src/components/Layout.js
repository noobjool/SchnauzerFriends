import React from "react";
import { Link, Typography } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <nav>
        <Link href="/">
          <Typography variant="h2" align="center" paragraph="true">
            Welcome to Schnauzer Friends
          </Typography>
        </Link>
      </nav>
    </>
  );
};

export default Layout;
