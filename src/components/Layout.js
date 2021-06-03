import React from "react";
import { Link } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </>
  );
};

export default Layout;
