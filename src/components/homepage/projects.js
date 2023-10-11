import React, { useState } from "react";
import { Typography, Grid, useMediaQuery, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import projectsData from "../../data/projects";

const useStyles = makeStyles((theme) => ({
  heading: {
    width: "100%",
    fontSize: "clamp(24px,5vw,32px)",
    whiteSpace: "nowrap",
    fontWeight: "600",
    color: "#ccd6f6",
    lineHeight: "1.1",
    fontFamily: "Calibre",
    textAlign: "center",
    marginBottom: "10px",
  },
  workUrl: {
    fontFamily: "SF Mono",
    fontWeight: "400",
    fontSize: "14px",

    color: theme.palette.secondary.main,
    position: "relative",
    display: "inline-block",
    textDecoration: "none",
    textDecorationSkipInk: "auto",
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    "&:hover": {
      color: theme.palette.secondary.main,
      outline: 0,
      "&::after": {
        width: "100%",
      },
    },
    "&::after": {
      content: "' '",
      display: "block",
      width: 0,
      height: "2px",
      position: "relative",
      bottom: "0.37em",
      backgroundColor: theme.palette.secondary.main,
      transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
      opacity: 0.5,
    },
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "15px",
    position: "relative",
    [theme.breakpoints.down("1080")]: {
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    },
  },
  card: {
    position: "relative",
    //cursor: "default",
    width: "100%",
    boxShadow: "0 10px 30px -15px rgba(2,12,27,0.7)",
    padding: "2rem 1.75rem",
    borderRadius: "4px",
    backgroundColor: "#112240",
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    "&:hover": {
      transform: "translateY(-7px)",
      "& $cardHeading": {
        color: theme.palette.secondary.main,
      },
    },
  },
  cardIcon: {
    width: "22px",
    height: "22px",
    color: "#a8b2d1",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  cardHeading: {
    textDecoration: "none",
    fontSize: "22px",
    //  whiteSpace: "nowrap",
    fontWeight: "600",
    color: "#ccd6f6",
    lineHeight: "1.1",
    fontFamily: "Calibre",
    position: "static",
    zIndex: 1,
    // "&::before": {
    //   content: '" "',
    //   display: "block",
    //   position: "absolute",
    //   zIndex: "0",
    //   width: "100%",
    //   height: "100%",
    //   top: "0px",
    //   left: "0px",
    // },
  },
  button: {
    textTransform: "none",
    color: theme.palette.secondary.main,
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: "1.25rem 1.75rem",
    fontSize: "14px",
    fontFamily: "SF Mono",
    fontWeight: 500,
    borderRadius: "4px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "rgba(100,255,218,0.1)",
      color: theme.palette.secondary.main,
    },
  },
}));

const truncateSummary = (summary, maxLength) => {
  if (summary.length <= maxLength) {
    return summary;
  } else {
    const truncatedSummary = summary.slice(0, maxLength);
    return `${truncatedSummary} ...`;
  }
};
export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("700"));
  const [showMore, setShowMore] = useState(false);
  const [projects, setProjects] = useState(
    projectsData
      .filter((p) => !p.isFeatured)
      .map((x) => {
        return {
          ...x,
          open: false,
        };
      })
  );

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.root}
    >
      {/* Get In Touch */}
      <Grid item>
        <Typography
          varaint='body1'
          data-aos='fade-up'
          data-aos-duration='2000'
          className={classes.heading}
        >
          Other Noteworthy Projects
        </Typography>
      </Grid>
      {/* <Grid item>
        <Typography
          varaint='body1'
          className={classes.workUrl}
          style={{
            color: theme.palette.secondary.main,
            fontSize: "16px",
            fontFamily: "SF Mono",
            fontWeight: 400,
            marginBottom: "20px",
          }}
          data-aos='fade-up'
          data-aos-duration='2000'
        >
          view the archive
        </Typography>
      </Grid> */}
      {/*  cards */}
      <Grid item style={{ marginTop: "30px", width: "100%" }}>
        <div className={classes.cardContainer}>
          {(showMore ? projects : projects.slice(0, 6)).map((p, i) => (
            <Grid
              item
              data-aos='fade-up'
              data-aos-duration='2000'
              key={i}
              style={{ display: "flex" }}
            >
              <Grid container direction='column' className={classes.card}>
                {/* folder github website */}
                <Grid item style={{ width: "100%" }}>
                  <Grid
                    container
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    {/* folder */}
                    <Grid item>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        stroke={theme.palette.secondary.main}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        viewBox='0 0 24 24'
                        style={{ width: "40px", height: "40px" }}
                      >
                        <path d='M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z'></path>
                      </svg>
                    </Grid>
                    {/* github website */}
                    <Grid item>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "15px",
                        }}
                      >
                        {p.gitUrl && (
                          <a
                            href={p.gitUrl}
                            target='_blank'
                            style={{ textDecoration: "none" }}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              className={classes.cardIcon}
                              viewBox='0 0 24 24'
                            >
                              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22'></path>
                            </svg>
                          </a>
                        )}
                        {p.deployedUrl && (
                          <a
                            href={p.deployedUrl}
                            target='_blank'
                            style={{ textDecoration: "none" }}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              className={classes.cardIcon}
                              viewBox='0 0 24 24'
                            >
                              <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6'></path>
                              <path d='M15 3L21 3 21 9'></path>
                              <path d='M10 14L21 3'></path>
                            </svg>
                          </a>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                {/* project name */}
                <Grid item style={{ width: "100%", marginTop: "30px" }}>
                  <Typography varaint='h3'>
                    <a href={p.website} className={classes.cardHeading}>
                      {p.title}
                    </a>
                  </Typography>
                </Grid>
                {/* description */}
                <Grid item style={{ width: "100%", marginTop: "10px" }}>
                  <Typography varaint='h3' style={{ color: "#8892b0" }}>
                    {p.open ? p.summary : truncateSummary(p.summary, 100)}{" "}
                    {p.summary.length > 100 && (
                      <span
                        style={{
                          cursor: "pointer",
                          color: "blue",
                          color: theme.palette.secondary.main,
                        }}
                        onClick={() => {
                          setProjects((existingProjects) =>
                            existingProjects.map((existingProject, index) => {
                              if (index === i) {
                                existingProject.open = !existingProject.open;
                              }
                              return existingProject;
                            })
                          );
                        }}
                      >
                        {p.open ? "Show less" : "Show more"}
                      </span>
                    )}
                  </Typography>
                </Grid>
                {/* techs */}
                <Grid item style={{ width: "100%", marginTop: "20px" }}>
                  <Grid container>
                    {p.technologies.map((t, i) => (
                      <Typography
                        key={i}
                        varaint='body1'
                        style={{
                          fontFamily: "SF Mono",
                          lineHeight: 1.75,
                          fontSize: "12px",
                          color: "#8892b0",
                          marginRight:
                            p.technologies.length === i + 1 ? 0 : "15px",
                        }}
                      >
                        {t}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </div>
      </Grid>
      {/* show more */}
      <Grid
        item
        container
        justifyContent='center'
        style={{ marginTop: "80px" }}
      >
        <Button
          data-aos='fade-up'
          data-aos-duration='2000'
          onClick={() => setShowMore((m) => !m)}
          className={classes.button}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </Grid>
    </Grid>
  );
}
