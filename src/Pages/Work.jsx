import React from "react";
import "../Assets/scss/Pages/work.scss";
import { Box, Container, Grid, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import projects from "../json/project.json";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

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
          <Grid container spacing={1}>
            {children}
          </Grid>
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
    <>
      <Helmet>
        <title>{`Portfolio | Project`}</title>

        <meta name="description" content="This is resume page" />
        <meta property="og:title" content="My Resume" />
        <meta property="og:description" content="This is resume page" />
      </Helmet>

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
              aria-label="tabs"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="ReactJS" {...a11yProps(1)} />
              <Tab label="Landing Page" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} key={project.name}>
                <div
                  className={`projectCard ${
                    project.process === "incomplete" ? "coming-soon" : ""
                  }`}
                >
                  <Link to={`/project/${project.name}`} rel="noreferrer">
                    <img
                      src={
                        project.image[0] === ""
                          ? { display: "none" }
                          : project.image[0]
                      }
                      alt={project.image[0] === "" ? "..." : project.name}
                    />

                    <h3 className="projectName">{project.name}</h3>
                    <p className="techused">{project.codeWith}</p>
                  </Link>
                </div>
              </Grid>
            ))}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {projects
              .filter((project) => project.type === "reactjs")
              .map((project) => (
                <Grid item xs={12} sm={6} key={project.name}>
                  <div
                    className={`projectCard ${
                      project.process === "incomplete" ? "coming-soon" : ""
                    }`}
                  >
                    <Link to={`/project/${project.name}`} rel="noreferrer">
                      <img
                        src={
                          project.image[0] === ""
                            ? { display: "none" }
                            : project.image[0]
                        }
                        alt={project.image[0] === "" ? "..." : project.name}
                      />
                      <h3 className="projectName">{project.name}</h3>
                      <p className="techused">{project.codeWith}</p>
                    </Link>
                  </div>
                </Grid>
              ))}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {projects
              .filter((project) => project.type === "landingpage")
              .map((project) => (
                <Grid item xs={12} sm={6} key={project.name}>
                  <div
                    className={`projectCard ${
                      project.process === "incomplete" ? "coming-soon" : ""
                    }`}
                  >
                    <Link to={`/project/${project.name}`}>
                      {project.image[0] !== "" && (
                        <img
                          src={project.image[0]}
                          alt={project.image[0] === "" ? "..." : project.name}
                        />
                      )}

                      <h3 className="projectName">{project.name}</h3>
                      <p className="techused">{project.codeWith}</p>
                    </Link>
                  </div>
                </Grid>
              ))}
          </CustomTabPanel>
        </Container>
      </div>
    </>
  );
};

export default Work;
