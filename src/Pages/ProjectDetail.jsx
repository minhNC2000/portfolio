import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dataProject from "../json/project.json";
import "../Assets/scss/Pages/projectDetail.scss";
import { Container } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
const ProjectDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const projectData = dataProject.find((project) => project.name === name);
    setProjectData(projectData);
  }, [name]);

  if (!projectData) {
    return <div>Loading...</div>;
  }
  const renderBoldText = (text) => {
    // Split the text by asterisks, keeping the asterisks and the text between them
    const parts = text.split(/(\*[^*]+\*)/g);

    // Map over the parts and render text or bold text accordingly
    return parts.map((part, index) => {
      // Check if the part is meant to be bold (enclosed in asterisks)
      if (part.startsWith("*") && part.endsWith("*")) {
        // Render the text without the asterisks and make it bold
        return <strong key={index}>{part.slice(1, -1)}</strong>;
      }
      // Render the text as normal for parts not enclosed in asterisks
      return part;
    });
  };
  const renderNewLine = (text) => {
    return text.split(".").map((sentence, index, array) => (
      <span key={index}>
        {sentence}
        {index < array.length - 1 ? ".<br />" : ""}
      </span>
    ));
  };
  const combineText = (text) => {
    const NewLines = renderNewLine(text);
    return renderBoldText(NewLines);
  };

  return (
    <div className="project-detail">
      <Container maxWidth="md">
        <button className="goback" onClick={() => navigate(-1)}>
          <ArrowBack />
        </button>
        <div className="title">Project Name : {name}</div>
        <div className="projectLink">
          Url :
          <a href={projectData.url} target="_blank" rel="noreferrer">
            Click here
          </a>
        </div>
        <div className="techstack">Tech stack : {projectData.codeWith}</div>
        <div className="process">
          Process : <span>{projectData.process}</span>
        </div>

        <div className="projectExperience">
          <h2> Experience : </h2>
          {projectData && renderBoldText(projectData.experience)}
        </div>
        <div className="projectDescription">
          <h2> Description : </h2> {renderBoldText(projectData.description)}
        </div>
        <div className="projectImage">
          <h3>Some image from project :</h3>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            dotClass={false}
            items={1}
            autoplay={true}
          >
            {projectData.image &&
              projectData.image.map((imgUrl, index) => (
                <div className="item" key={index}>
                  <img src={imgUrl} alt={`${projectData.name} ${index + 1}`} />
                </div>
              ))}
          </OwlCarousel>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetail;
