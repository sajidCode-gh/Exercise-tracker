import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Exercies</Link>
        </li>

        <li>
          <Link to="/create">Create Exercise</Link>
        </li>
        <li>
          <Link to="/user">Create User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
