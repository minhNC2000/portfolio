import React from "react";
import { Route, Routes } from "react-router";

import Home from "../Pages/Home";
import Resume from "../Pages/Resume";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";
import ProjectDetail from "../Pages/ProjectDetail";

export default function PublicRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/project">
        <Route path="" element={<Work />} />
        <Route path=":name" element={<ProjectDetail />} />
      </Route>

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
