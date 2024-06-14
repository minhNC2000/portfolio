import React from "react";
import { Route, Routes } from "react-router";

import Home from "../Pages/Home";
import Resume from "../Pages/Resume";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";

export default function PublicRoutes(props) {
  const { matches } = props;

  return (
    <Routes>
      <Route path="/" element={<Home matches={matches} />} />
      <Route path="/resume" element={<Resume matches={matches} />} />
      <Route path="/project" element={<Work matches={matches} />} />
      <Route path="/contact" element={<Contact matches={matches} />} />
    </Routes>
  );
}
