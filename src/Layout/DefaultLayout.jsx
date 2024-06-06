import React from "react";
import Header from "./Header";

import Navigation from "./Navigation";
import PublicRoutes from "../Routes/publicRoutes";

import "../Assets/scss/reset.scss";
import { Container, Grid } from "@mui/material";
import Profile from "./Profile";

const DefaultLayout = () => {
  return (
    <>
      <Container >
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Header />
            <Navigation />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Profile />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <PublicRoutes />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DefaultLayout;
