import React, { useState, useEffect } from "react";

import anime from "animejs";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "#020c1b",
    zIndex: "99",
  },
  logoWrapper: {
    width: "max-content",
    maxWidth: "100px",
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
  },
  svg: {
    display: "block",
    width: "100%",
    height: "100%",
    margin: "0 auto",
    fill: "none",
    userSelect: "none",
  },
  b: {
    opacity: 0,
  },
}));

const Loader = ({ finishLoading }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo path",
        delay: 300,
        duration: 1500,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: "#logo #B",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: "#logo",
        delay: 500,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: ".loader",
        duration: 200,
        easing: "easeInOutQuart",
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={classes.root} style={{ opacity: isMounted ? 1 : 0 }}>
      <div className={classes.logoWrapper}>
        <svg
          id='logo'
          className={classes.svg}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
        >
          <title>Loader Logo</title>
          <g>
            {/* <g id="B" className={classes.b} transform="translate(11.000000, 5.000000)">
              <path
                d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                fill={theme.palette.secondary.main}
              />
            </g> */}
            <g
              id='B'
              className={classes.b}
              transform='translate(24.000000, 24.000000)'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='50.8'
                height='50.8'
                fill='none'
                stroke={theme.palette.secondary.main}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='icon icon-tabler icon-tabler-letter-s'
                viewBox='0 0 24 24'
              >
                <path stroke='none' d='M0 0h24v24H0z'></path>
                <path d='M17 8a4 4 0 00-4-4h-2a4 4 0 000 8h2a4 4 0 010 8h-2a4 4 0 01-4-4'></path>
              </svg>
            </g>
            <path
              stroke={theme.palette.secondary.main}
              strokeWidth='5'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z'
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
