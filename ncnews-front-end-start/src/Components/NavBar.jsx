import React from "react";
import { Link } from "@reach/router";
import { Router } from "@reach/router";

function NavBar(props) {
  return (
    <div className="NavBar">
        <Link to="/">
          <button path={`/`}>Home</button>
        </Link>
      <span> </span>
      <div className="dropdown">
        <button className="dropbtn">Sort articles by topic</button>
        <div className="dropdown-content">
          {/* <Router> */}
            <Link
              to="/api/topics/coding"
              className="dropLink"
              path={`/api/topics/coding`}
            >
              Coding
            </Link>
          {/* </Router> */}
          {/* <Router> */}
            <Link
              to="/api/topics/cooking"
              className="dropLink"
              path={`/api/topics/cooking`}
            >
              Cooking
            </Link>
          {/* </Router> */}
          {/* <Router> */}
            <Link
              to="/api/topics/football"
              className="dropLink"
              path={`/api/topics/football`}
            >
              Football
            </Link>
          {/* </Router> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
