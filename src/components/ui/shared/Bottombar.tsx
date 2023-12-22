import React from "react";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { pathname } = useLocation();
  return <div>Bottombar</div>;
};

export default Bottombar;
