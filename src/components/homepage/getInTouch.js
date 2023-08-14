import React from 'react';
import { Typography, Grid, useMediaQuery, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import user from '../../data/user';

const useStyles = makeStyles((theme) => ({
  heading: {
    width: '100%',
    fontSize: 'clamp(40px,5vw,60px)',
    whiteSpace: 'nowrap',
    fontWeight: '600',
    color: '#ccd6f6',
    lineHeight: '1.1',
    fontFamily: 'Calibre',
    textAlign: 'center',
    marginBottom: '10px',
  },
  text: {
    fontWeight: '400',
    color: '#8892b0',
    lineHeight: '1.3',
    fontFamily: 'Calibre',
    fontSize: '20px',
    margin: '0px 0px 15px',
    textAlign: 'center',
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
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(100,255,218,0.1)',
      color: theme.palette.secondary.main,
    },
  },
}));
export default function GetInTouch() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('600'));
  return (
    <Grid container   data-aos="fade-up"
    data-aos-duration="2000" direction="column" alignItems="center" className={classes.root}>
      {/* what next */}
      <Grid item>
        <Typography
          varaint="body1"
          className={classes.text}
          style={{
            color: theme.palette.secondary.main,
            fontSize: '16px',
            fontFamily: 'SF Mono',
            fontWeight: 400,
            marginBottom: '20px',
          }}
        >
          04. What’s Next?
        </Typography>
      </Grid>
      {/* Get In Touch */}
      <Grid item>
        <Typography varaint="body1" className={classes.heading}>
          Get In Touch
        </Typography>
      </Grid>
      <Grid item>
        <Typography varaint="body1" className={classes.text}>
          Although I’m not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </Typography>
      </Grid>
      <Grid item style={{ marginTop: '50px' }}>
        <a href={`mailto:${user.email}`} className={classes.button} target="_blank">
          Say Hello
        </a>
      </Grid>
    </Grid>
  );
}
