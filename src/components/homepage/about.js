import React from 'react';
import { Typography, Grid, useMediaQuery, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import user from '../../data/user';

const useStyles = makeStyles((theme) => ({
  heading: {
    display: 'flex',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '10px 0px 40px',
    width: '100%',
    fontSize: 'clamp(26px,5vw,32px)',
    whiteSpace: 'nowrap',
    fontWeight: '600',
    color: '#ccd6f6',
    lineHeight: '1.1',
    fontFamily: 'Calibre',
    '&::before': {
      position: 'relative',
      bottom: '4px',
      counterIncrement: 'section 1',
      content: "'01.'",
      marginRight: '10px',
      color: theme.palette.secondary.main,
      fontFamily: 'SF Mono',
      fontSize: 'clamp(16px,3vw,20px)',
      fontWeight: '400',
      [theme.breakpoints.down('480')]: {
        marginBottom: '-3px',
        marginRight: '5px',
      },
    },
    '&::after': {
      content: "' '",
      display: 'block',
      position: 'relative',
      top: '-5px',
      width: '300px',
      height: '1px',
      marginLeft: '20px',
      backgroundColor: '#233554',
      [theme.breakpoints.down('1080')]: {
        width: '200px',
      },
      [theme.breakpoints.down('768')]: {
        width: '100%',
      },
      [theme.breakpoints.down('600')]: {
        marginLeft: '10px',
      },
    },
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
  inner: {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr',
    gap: '50px',
    [theme.breakpoints.down('768')]: {
      display: 'block',
    },
  },
  text: {
    fontWeight: '400',
    color: '#8892b0',
    lineHeight: '1.3',
    fontFamily: 'Calibre',
    fontSize: '20px',
    margin: '0px 0px 15px',
  },
  skillList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
    gap: '0px 10px',
    padding: '0px',
    margin: '20px 0px 0px',
    overflow: 'hidden',
    listStyle: 'none',
  },
  skillItem: {
    color: '#8892b0',
    position: 'relative',
    marginBottom: '10px',
    paddingLeft: '20px',
    fontFamily: 'SF Mono',
    fontSize: '13px',
    '&::before': {
      content: '"▹"',
      position: 'absolute',
      left: '0px',
      color: theme.palette.secondary.main,
      fontSize: '14px',
      lineHeight: '12px',
    },
  },
  imgWrapper: {
    boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
    transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    display: 'block',
    position: 'relative',
    width: '100%',
    borderRadius: '4px',
    backgroundColor: theme.palette.secondary.main,
    '&::before': {
      content: "''",
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '4px',
      transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
      top: '0px',
      left: '0px',
      backgroundColor: '#0a192f',
      mixBlendMode: 'screen',
    },
    '&::after': {
      content: "''",
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '4px',
      transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
      border: `2px solid ${theme.palette.secondary.main}`,
      top: '20px',
      left: '20px',
      zIndex: '1',
    },
    '&:hover': {
      boxShadow: '0 20px 30px -15px rgba(2,12,27,0.7)',
      '& $img': {
        filter: 'none',
        mixBlendMode: 'normal',
      },
      '&::after': {
        top: '15px',
        left: '15px',
      },
    },
  },
  img: {
    zIndex: 10,
    position: 'relative',
    borderRadius: '4px',
    mixBlendMode: 'multiply',
    filter: 'grayscale(100%) contrast(1)',
    transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    width: '100%',
    maxWidth: '100%',
    verticalAlign: 'middle',
    display: 'inline-block',
    overflow: 'hidden',
  },
  imgSide: {
    position: 'relative',
    maxWidth: '300px',
    [theme.breakpoints.down('768')]: {
      margin: '50px auto 0px',
      width: '70%',
    },
  },
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      {/* hi text */}
      <Grid item>
        <Typography varaint="body1" className={classes.heading}>
          About Me
        </Typography>
      </Grid>
      <Grid item>
        <div className={classes.inner}>
          {/* left text */}
          <div>
            <Typography varaint="body1" className={classes.text}>
              Hello! My name is Brittany and I enjoy creating things that live on the internet. My
              interest in web development started back in 2012 when I decided to try editing custom
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot
              about HTML & CSS!
            </Typography>
            <Typography varaint="body1" className={classes.text}>
              Fast-forward to today, and I’ve had the privilege of working at an{' '}
              <a href="https://us.mullenlowe.com/" className={classes.workUrl} target={'_blank'}>
                {' '}
                advertising agency
              </a>
              ,{' '}
              <a href="https://starry.com/" target={'_blank'} className={classes.workUrl}>
                {' '}
                a start-up
              </a>
              ,{' '}
              <a href="https://www.apple.com/" target={'_blank'} className={classes.workUrl}>
                a huge corporation
              </a>
              , and{' '}
              <a
                href="https://scout.camd.northeastern.edu/"
                target={'_blank'}
                className={classes.workUrl}
              >
                a student-led design studio
              </a>
              . My main focus these days is building accessible, inclusive products and digital
              experiences at{' '}
              <a href="https://upstatement.com/" target={'_blank'} className={classes.workUrl}>
                Upstatement
              </a>{' '}
              for a variety of clients.
            </Typography>
            <Typography varaint="body1" className={classes.text}>
              I also recently{' '}
              <a href="https://us.mullenlowe.com/" className={classes.workUrl} target={'_blank'}>
                launched a course
              </a>{' '}
              that covers everything you need to build a web app with the Spotify API using Node &
              React.
            </Typography>
            <Typography varaint="body1" style={{ margin: 0 }} className={classes.text}>
              Here are a few technologies I’ve been working with recently:
            </Typography>
            <ul className={classes.skillList}>
              {user.skills.map((s, i) => (
                <li key={i} className={classes.skillItem}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          {/* right image */}
          <div className={classes.imgSide}>
            <div className={classes.imgWrapper}>
              <div className={classes.img}>
                <div style={{ maxWidth: '500px', display: 'block' }}>
                  <img
                    alt="profile"
                    role="presentation"
                    aria-hidden="true"
                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                    style={{
                      maxWidth: '100%',
                      display: 'block',
                      filter: 'blur(5px)',
                      bottom: 0,
                      height: '100%',
                      left: 0,
                      margin: 0,
                      position: 'static',
                      right: 0,
                      top: 0,
                      width: '100%',
                      objectFit: 'cover',
                      verticalAlign: 'middle',
                    }}
                  />
                </div>

                <div
                  aria-hidden="true"
                  style={{
                    opacity: 0,
                    transition: 'opacity 500ms linear 0s',
                    backgroundColor: 'rgb(232, 232, 232)',
                    position: 'absolute',
                    inset: '0px',
                    objectFit: 'cover',
                  }}
                />

                <picture>
                  <source
                    type="image/avif"
                    srcSet="/dev/me.avif 125w,
                    /dev/me.avif 250w,
                    /dev/me.avif 500w"
                    sizes="(min-width: 500px) 500px, 100vw"
                  />

                  <source
                    type="image/webp"
                    srcSet="/dev/me.webp 125w,
                    /dev/me.webp 250w,
                    /dev/me.webp 500w"
                    sizes="(min-width: 500px) 500px, 100vw"
                  />
                  <img
                    width="500"
                    height="500"
                    sizes="(min-width: 500px) 500px, 100vw"
                    decoding="async"
                    src="/dev/me.jpg"
                    srcSet="/dev/me.jpg 125w,
                    /dev/me.jpg 250w,
                    /dev/me.jpg 500w"
                    alt="Headshot"
                    style={{
                      objectFit: 'cover',
                      opacity: 1,
                      bottom: '0',
                      height: '100%',
                      left: '0',
                      margin: '0',
                      maxWidth: 'none',
                      padding: '0',
                      position: 'absolute',
                      right: '0',
                      top: '0',
                      width: '100%',
                      verticalAlign: 'middle',
                    }}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
