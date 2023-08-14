import React from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import user from '../data/user';

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.main,
    minHeight: '90vh',
    position: 'relative',
    // padding: '0 40px',
    // [theme.breakpoints.down('sm')]: {
    //   padding: '0 25px',
    // },
  },
  social: {
    width: '40px',
    position: 'fixed',
    bottom: 0,
    left: '40px',
    color: '#a8b2d1',
    [theme.breakpoints.down('1080px')]: {
      left: '40px',
      right: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  email: {
    width: '40px',
    position: 'fixed',
    bottom: 0,
    left: 'auto',
    right: '40px',
    color: '#a8b2d1',
    zIndex: 10,
    [theme.breakpoints.down('1080')]: {
      left: 'auto',
      right: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  socialList: {
    '&::after': {
      content: "' '",
      display: 'block',
      width: '1px',
      height: '90px',
      margin: '0px auto',
      backgroundColor: '#A8B2D1',
    },
  },
  emailText: {
    margin: '20px auto',
    padding: '10px',
    writingMode: 'vertical-rl',
    letterSpacing: '0.1rem',
    lineHeight: '18px',
    fontSize: '12px',
    fontWeight: 500,
    color: '#a8b2d1',
    fontFamily: 'SF Mono',
    textDecoration: 'none',
    transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  fillHeight: {
    padding: '0px 150px',
    [theme.breakpoints.down('1080')]: {
      padding: '0px 100px',
    },
    [theme.breakpoints.down('768')]: {
      padding: '0px 50px',
    },
    [theme.breakpoints.down('480')]: {
      padding: '0px 25px',
    },
  },
}));

export default function container(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <div className={classes.container}>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          aria-orientation="left"
          className={classes.social}
        >
          <Grid container direction="column" alignItems="center" className={classes.socialList}>
            {user.social.map((item, i) => (
              <Grid
                item
                key={i}
                style={{ padding: '10px', marginBottom: user.social.length === i + 1 ? '20px' : 0 }}
              >
                <a href={item.url} aria-label={item.name} target="_blank" rel="noreferrer">
                  {item.svg}
                </a>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.fillHeight} style={{ zIndex: 1 }}>
          <div style={{ zIndex: 19 }}>{props.children}</div>
        </div>
        <div
          orientation="right"
          data-aos="fade-up"
          data-aos-duration="3000"
          className={classes.email}
        >
          <div className={classes.socialList}>
            <a href={`mailto:${user.email}`} className={classes.emailText}>
              {user.email}
            </a>
          </div>
        </div>
      </div>
      <style>
        {`
    .fillHeight {
        padding: 0px 150px;
    }
    @media (max-width: 1080px){
      .fillHeight {
        padding: 0px 100px;
    }
  }
  @media (max-width: 768px){
    .fillHeight {
        padding: 0px 50px;
    }
}
    @media (max-width: 480px){
            .fillHeight {
                padding: 0px 25px;
            }
            body {
              font-size: 18px;
          }
    }
   
  





    
    `}
      </style>
    </>
  );
}
