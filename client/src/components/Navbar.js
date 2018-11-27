import React from "react";

import Search from "./Search";

const Navbar = props => (
  <div className="navbar">
    <h2 className="logo">mmartan</h2>
    <Search {...props} />
  </div>
);

export default Navbar;
