import { Typography, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '../src/Reusable/container';
import HeroSection from '../src/components/homepage/hero';
import AboutSection from '../src/components/homepage/about';
import Jobs from '../src/components/homepage/job';
import FeaturedProjects from '../src/components/homepage/featuredProjects';
import Expertise from '../src/components/homepage/expertise';

import Projects from '../src/components/homepage/projects';
import GetInTouch from '../src/components/homepage/getInTouch';
const useStyles = makeStyles((theme) => ({
  paddingContainer: {
    padding: '100px 0px',
    maxWidth: '900px',
    margin: '0 auto',
    [theme.breakpoints.down('768')]: {
      padding: '80px 0px',
    },
    [theme.breakpoints.down('480')]: {
      padding: '60px 0px',
    },
  },
}));
export default function index() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column">
        <div id="back-to-top-anchor" />

        {/* hero section */}
        <Grid item id="hero">
          <HeroSection />
        </Grid>
        <Grid item id="about" style={{ width: '100%' }} className={classes.paddingContainer}>
          <AboutSection />
        </Grid>
        <Grid
          item
          id="experience"
          style={{ width: '100%', maxWidth: '700px ' }}
          className={classes.paddingContainer}
        >
          <Jobs />
        </Grid>

        <Grid
          item
          id="feature"
          style={{ width: '100%', maxWidth: '1000px ' }}
          className={classes.paddingContainer}
        >
          <FeaturedProjects />
        </Grid>

        <Grid
          item
          id="work"
          style={{ width: '100%', maxWidth: '1000px ' }}
          className={classes.paddingContainer}
        >
          <Expertise />
        </Grid>
        <Grid
          item
          style={{ width: '100%', maxWidth: '1000px ' }}
          className={classes.paddingContainer}
        >
          <Projects />
        </Grid>
        <Grid
          item
          id="contact"
          style={{ width: '100%', maxWidth: '600px', marginBottom: '100px' }}
          className={classes.paddingContainer}
        >
          <GetInTouch />
        </Grid>
      </Grid>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 12px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #495670;
            border: 3px solid #0a192f;
            border-radius: 10px;
          
          }

          ::-webkit-scrollbar-track {
            background: #0a192f;
          }
          ::selection {
            background-color: #233554;
            color: #ccd6f6;
          }
        `}
      </style>
    </Container>
  );
}
