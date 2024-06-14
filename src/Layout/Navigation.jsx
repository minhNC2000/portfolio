import React from "react";
import "../Assets/scss/Layout/navigation.scss";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WorkIcon from "@mui/icons-material/Work";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import navigationData from "../json/navigation.json";

const iconMap = {
  HomeIcon,
  AssignmentIcon,
  WorkIcon,
  PermContactCalendarIcon,
};
const Navigation = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div className="navigation">
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
