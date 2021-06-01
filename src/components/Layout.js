import React from "react";
import { Link } from "@material-ui/core";

function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dogs">Dogs</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Layout;
