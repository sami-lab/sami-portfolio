import React from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import user from '../data/user';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
  },
  link: {
    color: '#a8b2d1',
    fontFamily: 'SF Mono',
    fontSize: '12px',
    lineHeight: '1',
    textDecoration: 'none',
    padding: '10px',
    display: 'inline-block',
    transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  svg: {
    marginRight: '5px',
    width: '14px',
    height: '14px',
  },
}));
export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="column" alignItems="center" className={classes.root}>
      {/* social */}
      <Grid item>
        <Grid container justifyContent="center" style={{ gap: '20px', marginBottom: '10px' }}>
          {user.social.map((item, i) => (
            <Grid item key={i} style={{ padding: '10px' }}>
              <a href={item.url} aria-label={item.name} target="_blank" rel="noreferrer">
                {item.svg}
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <a href={user.github} className={classes.link} rel="noopener noreferrer" target="_blank">
          Designed & Built by Brittany Chiang
          <div
            style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '15px' }}
          >
            <div>
              <Grid container alignItems="center">
                <Grid item>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className={classes.svg}
                  >
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"></path>
                  </svg>
                </Grid>
                <Grid item>
                  <span>5,455</span>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container alignItems="center">
                <Grid item>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className={classes.svg}
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 3L6 15"></path>
                    <circle cx="18" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M18 9a9 9 0 01-9 9"></path>
                  </svg>
                </Grid>
                <Grid item>
                  <span>2,540</span>
                </Grid>
              </Grid>
            </div>
          </div>
        </a>
      </Grid>
    </Grid>
  );
}
