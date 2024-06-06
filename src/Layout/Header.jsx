import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../Assets/scss/Layout/header.scss";

const Header = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.className = mode === "night" ? "night-mode" : "white";
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "night" : "light"));
  };
  
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="header_wrapper">
              <div className="logo">
                <p>
                  Minh <span>Nguyễn</span>
                </p>
              </div>
              <button className="mode" onClick={toggleMode} disabled>
                {mode === "light" ? (
                  <NightlightIcon />
                ) : (
                  <LightModeIcon
                    style={{
                      color: "red",
                    }}
                  />
                )}
              </button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
