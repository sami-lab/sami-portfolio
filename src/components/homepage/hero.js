import React from 'react';
import { Typography, Grid, useMediaQuery, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import user from '../../data/user';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    maxWidth: '1000px',
    margin: '0px auto',
  },
  font: {
    fontFamily: 'SF Mono',
  },
  workUrl: {
    color: theme.palette.secondary.main,
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    textDecorationSkipInk: 'auto',
    transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    '&:hover': {
      color: theme.palette.secondary.main,
      outline: 0,
      '&::after': {
        width: '100%',
      },
    },
    '&::after': {
      content: "' '",
      display: 'block',
      width: 0,
      height: '1px',
      position: 'relative',
      bottom: '0.37em',
      backgroundColor: theme.palette.secondary.main,
      transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
      opacity: 0.5,
    },
  },
  button: {
    textTransform: 'none',
    color: theme.palette.secondary.main,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: '1.25rem 1.75rem',
    fontSize: '14px',
    fontFamily: 'SF Mono',
    fontWeight: 500,
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'rgba(100,255,218,0.1)',
      color: theme.palette.secondary.main,
    },
  },
}));
export default function hero() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      className={classes.root}
    >
      {/* hi text */}
      <Grid item>
        <Typography
          varaint="body1"
          className={classes.font}
          style={{ color: theme.palette.secondary.main, marginLeft: '4px', fontWeight: 400 }}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay
        >
          Hi, my name is
        </Typography>
      </Grid>
      {/* name */}
      <Grid item style={{ marginTop: '30px' }}>
        <Typography
          varaint="body1"
          style={{
            color: '#ccd6f6',
            lineHeight: 1.1,
            fontWeight: 600,
            fontFamily: 'Calibre',
            fontSize: 'clamp(40px, 8vw, 80px)',
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
        >
          {user.name}
        </Typography>
      </Grid>
      {/* name */}
      <Grid item style={{ marginTop: '10px' }}>
        <Typography
          varaint="body1"
          className={classes.font}
          style={{
            color: '#8892b0',
            lineHeight: 0.9,
            fontWeight: 600,
            fontFamily: 'Calibre',
            fontSize: 'clamp(40px, 8vw, 80px)',
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          I build things for the web.
        </Typography>
      </Grid>
      {/* description */}
      <Grid item style={{ marginTop: '20px' }}>
        <Typography
          varaint="body1"
          className={classes.font}
          style={{
            color: '#8892b0',
            lineHeight: 1.3,
            fontWeight: 400,
            fontFamily: 'Calibre',
            fontSize: '20px',
            maxWidth: '540px',
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          I’m a software engineer specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building accessible, human-centered
          products at{' '}
          <a href={user.workUrl} target="_blank" className={classes.workUrl}>
            Upstatement
          </a>
          .
        </Typography>
      </Grid>
      <Grid item style={{ marginTop: '50px' }}>
        <Button
          variant="outlined"
          className={classes.button}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Check out my course!
        </Button>
      </Grid>
    </Grid>
  );
}
