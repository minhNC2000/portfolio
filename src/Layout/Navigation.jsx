import React, { useState } from "react";
import "../Assets/scss/Layout/navigation.scss";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WorkIcon from "@mui/icons-material/Work";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import navigationData from "../json/navigation.json";

const iconMap = {
  HomeIcon,
  AssignmentIcon,
  WorkIcon,
  PermContactCalendarIcon,
};
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`navigation ${isOpen ? "open" : "closed"}`}>
      <button
        className={`arrow-button ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        {isOpen ?<ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
      </button>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ul className="nav_card" style={{ gap: matches ? 10 : "" }}>
            {navigationData.map((item) => (
              <NavLink to={item.link} key={item.label}>
                {React.createElement(iconMap[item.icon], {})}
                <p>{item.label}</p>
              </NavLink>
            ))}
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigation;
