import React from "react";
import "../Assets/scss/Pages/work.scss";
import { Box, Container, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import projects from "../json/project.json";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ flexBasis: "50%", p: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Work = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
 
  return (
    <div className="work">
      <Container maxWidth="md">
        <h1>Project</h1>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            aria-label="basic tabs example"
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="ReactJS" {...a11yProps(1)} />
            <Tab label="Landing Page" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {projects.map((project, index) => (
            <div key={index} className="projectCard">
              <a href={project.url} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.name}  />
        
                <h3 className="projectName">{project.name}</h3>
                <p className="techused">{project.codeWith}</p>
              </a>
            </div>
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {projects
            .filter((project) => project.type === "reactjs")
            .map((project, index) => (
              <div key={index} className="projectCard">
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={project.image} alt="" />
                  <h3 className="projectName">{project.name}</h3>
                  <p className="techused">{project.codeWith}</p>
                </a>
              </div>
            ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {projects
            .filter((project) => project.type === "landingpage")
            .map((project, index) => (
              <div key={index} className="projectCard">
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={project.image} alt="" />
                  <h3 className="projectName">{project.name}</h3>
                  <p className="techused">{project.codeWith}</p>
                </a>
              </div>
            ))}
        </CustomTabPanel>
      </Container>
    </div>
  );
};

export default Work;
