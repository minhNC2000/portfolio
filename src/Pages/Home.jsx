import React from "react";
import "../Assets/scss/Pages/home.scss";
import { Container, Grid } from "@mui/material";
import dataHome from "../json/home.json";
const Home = () => {
  return (
    <div className="home">
      <Container maxWidth="md">
        <h1>About me</h1>

        <p className="introduce">
          Hello! I’m Nguyen Cong Minh. I'm passionate about Web Design. I am a
          skilled Front-end developer. I am a quick learner and a team worker
          that gets the job done. I can easily capitalize on low hanging fruits
          and quickly maximize timely deliverables for real-time schemas.
        </p>
        <h2>What I do! </h2>

        <Grid container spacing={2}>
          {dataHome.home.map((item, index) => (
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={index}>
              <div className="card">
                <div className="icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
