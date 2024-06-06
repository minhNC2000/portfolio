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
          Hello there! I'm thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
        <h2>What I do! </h2>
      
        <Grid container spacing={2}>
          {dataHome.home.map((item, index) => (
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={index}>
              <div className="card">
                <div className="icon">
                  <img src={require(`../Assets/icon/${item.icon}`)} alt={item.title} />
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
