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
      counterIncrement: 'section 3',
      content: "'03.'",
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
  project: {
    position: 'relative',
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: 'repeat(12, 1fr)',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    marginBottom: '100px',
    [theme.breakpoints.down('768')]: {
      marginBottom: '70px',
      boxShadow: '0 10px 30px -15px rgb(2 12 27 / 70%)',
    },
    [theme.breakpoints.down('480')]: {
      marginBottom: '30px',
    },
  },
  projectContent: {
    position: 'relative',
    gridArea: '1 / 1 / -1 / 7',
    [theme.breakpoints.down('1080')]: {
      gridColumn: '1 / 9',
    },
    [theme.breakpoints.down('768')]: {
      display: 'flex',
      flexDirection: 'column',
      webkitBoxPack: 'center',
      justifyContent: 'center',
      height: '100%',
      gridColumn: '1 / -1',
      padding: '40px 40px 30px',
      zIndex: '5',
    },
    [theme.breakpoints.down('480')]: {
      padding: '30px 25px 20px',
    },
  },
  projectOdd: {
    gridColumn: '7 / -1',
    textAlign: 'right',
    [theme.breakpoints.down('1080')]: {
      gridColumn: '5 / -1',
    },
    [theme.breakpoints.down('768')]: {
      gridColumn: '1 / -1',
      padding: '40px 40px 30px',
      textAlign: 'left',
    },
    [theme.breakpoints.down('480')]: {
      padding: '25px 25px 20px',
    },
  },
  projectEven: {},
  projectImage: {
    boxShadow: '0 10px 30px -15px rgb(2 12 27 / 70%)',
    transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    gridArea: '1 / 6 / -1 / -1',
    position: 'relative',
    zIndex: '1',
    '&:hover': {
      boxShadow: '0 20px 30px -15px rgb(2 12 27 / 70%)',
    },

    '& a': {
      textDecoration: 'none',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '4px',
      verticalAlign: 'middle',
      position: 'relative',
      zIndex: '1',
      color: 'inherit',
      display: 'inline-block',
      transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
      '&:hover': {
        background: 'transparent',
      },
    },
    '& a::before': {
      content: '" "',
      position: 'absolute',
      width: '100%',
      height: '100%',
      inset: '0px',
      zIndex: '3',
      transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
      backgroundColor: '#0a192f',
      mixBlendMode: 'screen',
    },
    [theme.breakpoints.down('768')]: {
      gridColumn: '1 / -1',
      height: '100%',
      opacity: '0.25',
    },
  },
  projectImageOdd: {
    gridColumn: '1 / 8',
    [theme.breakpoints.down('768')]: {
      gridColumn: '1 / -1',
    },
  },
  projectImageEven: {},
  projectHeading: {
    textDecoration: 'none',
    fontSize: 'clamp(24px, 5vw, 28px)',
    fontWeight: '600',
    color: '#ccd6f6',
    lineHeight: '1.1',
    fontFamily: 'Calibre',
    position: 'static',
    zIndex: 1,
    marginBottom: '10px',
    '&::before': {
      content: '" "',
      display: 'block',
      position: 'absolute',
      zIndex: '0',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
    },
    [theme.breakpoints.down('768')]: {
      color: '#e6f1ff',
    },
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  projectDescription: {
    boxShadow: '0 10px 30px -15px rgb(2 12 27 / 70%)',
    transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
    position: 'relative',
    zIndex: '2',
    padding: '25px',
    borderRadius: '4px',
    backgroundColor: '#112240',
    color: '#a8b2d1',
    fontSize: '18px',
    [theme.breakpoints.down('768')]: {
      padding: '20px 0px',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  projectTechs: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: '2',
    margin: '25px 0px 10px',
    padding: '0px',
    listStyle: 'none',
    [theme.breakpoints.down('768')]: {
      margin: '10px 0px',
    },
    '& li': {
      color: '#a8b2d1',
      fontFamily: 'SF Mono',
      fontSize: '13px',
      whiteSpace: 'nowrap',
      margin: '0px 20px 5px 0px',
    },
  },
  projectTechsOdd: {
    webkitBoxPack: 'end',
    justifyContent: 'flex-end',
    '& li': {
      margin: '0px 0px 5px 20px',
    },
    [theme.breakpoints.down('768')]: {
      webkitBoxPack: 'start',
      justifyContent: 'flex-start',
      '& li': {
        margin: '0px 10px 5px 0px',
      },
    },
  },
  projectTechsEven: {},
  projectLinks: {
    display: 'flex',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: '10px',
    marginLeft: '-10px',
    color: '#ccd6f6',
    '& a': {
      padding: '10px',
    },
  },
  projectLinksOdd: {
    webkitBoxPack: 'end',
    justifyContent: 'flex-end',
    marginLeft: '0px',
    marginRight: '-10px',
    [theme.breakpoints.down('768')]: {
      webkitBoxPack: 'start',
      justifyContent: 'flex-start',
      marginLeft: '-10px',
      marginRight: '0px',
    },
  },
  projectLinksEven: {},
  projectIcon: {
    width: '22px',
    height: '22px',
    color: '#a8b2d1',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    width: '100%',
    maxWidth: '100%',
    verticalAlign: 'middle',
    borderRadius: '4px',
    mixBlendMode: 'multiply',
    filter: 'grayscale(100%) contrast(1) brightness(90%)',
    [theme.breakpoints.down('768')]: {
      objectFit: 'cover',
      width: 'auto',
      height: '100%',
      filter: 'grayscale(100%) contrast(1) brightness(50%)',
    },
  },
}));
export default function FeaturedProjects() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('600'));

  const featuredProjects = [
    {
      name: 'Halcyon Theme',
      description: (
        <Typography
          varaint="h3"
          style={{ color: '#8892b0', fontSize: '18px', fontFamily: 'Calibre' }}
        >
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on
          <a
            href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
            target="_blank"
            className={classes.workUrl}
          >
            Visual Studio Marketplace
          </a>
          ,{' '}
          <a
            href="https://packagecontrol.io/packages/Halcyon%20Theme"
            target="_blank"
            className={classes.workUrl}
          >
            Package Control
          </a>
          ,{' '}
          <a
            href="https://atom.io/themes/halcyon-syntax"
            target="_blank"
            className={classes.workUrl}
          >
            Atom Package Manager
          </a>
          , and{' '}
          <a
            href="https://www.npmjs.com/package/hyper-halcyon-theme"
            target="_blank"
            className={classes.workUrl}
          >
            npm
          </a>
          .
        </Typography>
      ),
      image: 'halcyon',
      technologies: ['Next.js', 'Chart.js', 'Github', 'API'],
      github: 'https://github.com/bchiang7/google-keep-vue-firebase',
      website: 'https://keep-vue.netlify.app/',
      learnMore: 'https://keep-vue.netlify.app/',
    },
    {
      name: 'Halcyon Theme',
      description: (
        <Typography
          varaint="h3"
          style={{ color: '#8892b0', fontSize: '18px', fontFamily: 'Calibre' }}
        >
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on
          <a
            href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
            target="_blank"
            className={classes.workUrl}
          >
            Visual Studio Marketplace
          </a>
          ,{' '}
          <a
            href="https://packagecontrol.io/packages/Halcyon%20Theme"
            target="_blank"
            className={classes.workUrl}
          >
            Package Control
          </a>
          ,{' '}
          <a
            href="https://atom.io/themes/halcyon-syntax"
            target="_blank"
            className={classes.workUrl}
          >
            Atom Package Manager
          </a>
          , and{' '}
          <a
            href="https://www.npmjs.com/package/hyper-halcyon-theme"
            target="_blank"
            className={classes.workUrl}
          >
            npm
          </a>
          .
        </Typography>
      ),
      image: 'halcyon',
      technologies: ['Next.js', 'Chart.js', 'Github', 'API'],
      github: 'https://github.com/bchiang7/google-keep-vue-firebase',
      website: 'https://keep-vue.netlify.app/',
      learnMore: 'https://keep-vue.netlify.app/',
    },
    {
      name: 'Halcyon Theme',
      description: (
        <Typography
          varaint="h3"
          style={{ color: '#8892b0', fontSize: '18px', fontFamily: 'Calibre' }}
        >
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on
          <a
            href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
            target="_blank"
            className={classes.workUrl}
          >
            Visual Studio Marketplace
          </a>
          ,{' '}
          <a
            href="https://packagecontrol.io/packages/Halcyon%20Theme"
            target="_blank"
            className={classes.workUrl}
          >
            Package Control
          </a>
          ,{' '}
          <a
            href="https://atom.io/themes/halcyon-syntax"
            target="_blank"
            className={classes.workUrl}
          >
            Atom Package Manager
          </a>
          , and{' '}
          <a
            href="https://www.npmjs.com/package/hyper-halcyon-theme"
            target="_blank"
            className={classes.workUrl}
          >
            npm
          </a>
          .
        </Typography>
      ),
      image: 'halcyon',
      technologies: ['Next.js', 'Chart.js', 'Github', 'API'],
      github: 'https://github.com/bchiang7/google-keep-vue-firebase',
      website: 'https://keep-vue.netlify.app/',
      learnMore: 'https://keep-vue.netlify.app/',
    },
  ];
  return (
    <Grid container direction="column" className={classes.root}>
      {/* heading text */}
      <Grid item>
        <Typography   data-aos="fade-up"
      data-aos-duration="2000" varaint="body1" className={classes.heading}>
          Some Things I’ve Built
        </Typography>
      </Grid>
      <Grid item>
        <div>
          {featuredProjects.map((p, i) => (
            <div
              key={i}
              className={classes.project}
              style={{ marginBottom: featuredProjects.length === i + 1 ? 0 : undefined }}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div
                className={[
                  classes.projectContent,
                  i % 2 === 0 ? classes.projectOdd : classes.projectEven,
                ].join(' ')}
              >
                <div>
                  <p
                    style={{
                      margin: '10px 0px',
                      color: theme.palette.secondary.main,
                      fontFamily: 'SF Mono',
                      fontSize: '13px',
                      fontWeight: '400',
                    }}
                  >
                    Featured Project
                  </p>
                  <h3 style={{ margin: 0 }}>
                    <a
                      href="https://halcyon-theme.netlify.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={classes.projectHeading}
                    >
                      {p.name}
                    </a>
                  </h3>
                  <div className={classes.projectDescription}>{p.description}</div>
                  <ul
                    className={[
                      classes.projectTechs,
                      i % 2 === 0 ? classes.projectTechsOdd : classes.projectTechsEven,
                    ].join(' ')}
                  >
                    {p.technologies.map((t, ti) => (
                      <li key={ti}>{t}</li>
                    ))}
                  </ul>
                  <div
                    className={[
                      classes.projectLinks,
                      i % 2 === 0 ? classes.projectLinksOdd : classes.projectLinksEven,
                    ].join(' ')}
                  >
                    {p.github && (
                      <a
                        href={p.github}
                        aria-label="GitHub Link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className={classes.projectIcon}
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                        </svg>
                      </a>
                    )}

                    {p.website && (
                      <a
                        href={p.website}
                        aria-label="External Link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className={classes.projectIcon}
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                          <path d="M15 3L21 3 21 9"></path>
                          <path d="M10 14L21 3"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={[
                  classes.projectImage,
                  i % 2 === 0 ? classes.projectImageOdd : classes.projectImageEven,
                ].join(' ')}
              >
                <a
                  href="https://halcyon-theme.netlify.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className={classes.imageWrapper}>
                    <div style={{ maxWidth: '700px', display: 'block' }}>
                      <img
                        alt=""
                        role="presentation"
                        aria-hidden="true"
                        src="data:image/svg+xml;charset=utf-8,%3Csvg height='438' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                        style={{
                          maxWidth: '100%',
                          display: 'block',
                          position: 'static',
                          bottom: '0',
                          height: '100%',
                          left: '0',
                          margin: '0',

                          padding: '0',
                          right: '0',
                          top: '0',
                          width: '100%',
                          objectFit: 'cover',
                          filter: 'blur(5px)',
                        }}
                      />
                    </div>
                    <img
                      aria-hidden="true"
                      data-placeholder-image=""
                      decoding="async"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBklEQVQoz23O7W6bMBQGYO5iSoEY7GBjY2MwH/6AJk3SrStVlQbabJq23f9lTCRR1x+VHllH57zHtie76VOZmbidhDuf9vOMl7vxgyl3k7Bj2b/uH093D6dm89rfv3X7N2Gny/Rj3hP2+J+Zcf2iuvHv7x/jdHo5vv359fM4nrL2Ov2Y94R5eSfdUXZj4UbpRqaP3BxzN3Izk+4qn9+45j2uD1wfhDlwc5BuLLqp6Maz6XLLpX4vcnvk5zA3B4+3z0I/0XpgzROrh7Sa0Xq4dLL2Oa0er+qBzc2B1XOeNoPH6iHhOiblTSQT0SNuAFE+Uj4sfVjG1CTCkWIdEwNQuYjLm7j0oQqQiqjziHpIWJPr9ZI6IDa0vaftGkoXi36ZuiXRMe9w+ZVXD7zdFlUPM+OjClJDilsvVd8xazBvF7EE1LF6l5s9re6R3GK5BakNsUGpw/ldVN5JZRKpfVQBXENmPVJ+A6hEpFlEwk8aLG+pcii3ATbBqvGhilKbFDuidqxaA96F2IH5RyYkxlvJPYhFKjdLogOssVpz2ydNH3MN0yZMKjAvb0W9E/WGlBvIbudNrENqvVW+A7Egol/AMsQaFWskWsRNIjrITLCqQGri1BLek9zBrLmBlT9Ty6T1VmIbRDxaqS9hFiRNgFsf1T6q3oHUQNbHqQXMwsxA2kbUAKLDpP0H4Daf056mKVMAAAAASUVORK5CYII="
                      alt=""
                      style={{
                        opacity: 0,
                        transition: 'opacity 500ms linear 0s',
                        objectFit: 'cover',
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
                        filter: 'blur(5px)',
                        verticalAlign: 'middle',
                      }}
                    />
                    <picture>
                      <source
                        type="image/avif"
                        srcSet={`/dev/${p.image}-175.avif 175w,
/dev/${p.image}-350.avif 350w,
/dev/${p.image}-700.avif 700w`}
                        sizes="(min-width: 700px) 700px, 100vw"
                      />
                      <source
                        type="image/webp"
                        srcSet={`/dev/${p.image}-175.webp 175w,
                        /dev/${p.image}-350.webp 350w,
                        /dev/${p.image}-750.webp 700w`}
                        sizes="(min-width: 700px) 700px, 100vw"
                      />

                      <img
                        width="700"
                        height="438"
                        sizes="(min-width: 700px) 700px, 100vw"
                        decoding="async"
                        src={`/dev/${p.image}-700.png`}
                        srcSet={`/dev/${p.image}-175.png 175w,
                        /dev/${p.image}-350.png 350w,
                        /dev/${p.image}-700.png 700w`}
                        alt="Halcyon Theme"
                        style={{
                          objectFit: 'cover',
                          opacity: 1,
                          transform: 'translateZ(0)',
                          transition: 'opacity .25s linear',
                          willChange: 'opacity',
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
                        }}
                      />
                    </picture>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
