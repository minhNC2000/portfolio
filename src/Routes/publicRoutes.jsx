import React from "react";
import { Route, Routes } from "react-router";

import Home from "../Pages/Home";
import Resume from "../Pages/Resume";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />}  />
    </Routes>
  );
}
