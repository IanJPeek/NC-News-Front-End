import React from "react";
import { Link } from "@reach/router";
import { Router } from "@reach/router";

function NavBar(props) {
  return (
    <div className="NavBar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <span> </span>
      <div className="dropdown">
        <button className="dropbtn">Sort articles by topic</button>
        <div className="dropdown-content">
          {/* <Router> */}
          <Link to="/topics/coding" className="dropLink">
            Coding
          </Link>
          {/* </Router> */}
          {/* <Router> */}
          <Link to="/topics/cooking" className="dropLink">
            Cooking
          </Link>
          {/* </Router> */}
          {/* <Router> */}
          <Link to="/topics/football" className="dropLink">
            Football
          </Link>
          {/* </Router> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
