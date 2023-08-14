import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  Grid,
  Button,
  Typography,
  AppBar,
  Toolbar,
  Menu,
  IconButton,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "./menu";

import pages from "../data/pages";
const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    transition: "background .3s,border .3s,border-radius .3s,box-shadow .3s",
    minHeight: "70px",
    justifyContent: "center",
  },
  show: {
    transform: "translateY(0)",
    transition: "transform .5s",
  },
  hide: {
    transform: "translateY(-110%)",
    transition: "transform .5s",
  },
  container: {
    padding: "0 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 25px",
    },
  },
  tab: {
    fontFamily: "SF Mono",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "13px",
    cursor: "pointer",
    color: "#CCD6F6",
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.secondary.main,
    },
  },
  button: {
    textTransform: "none",
    backgroundColor: "transparent",
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    fontFamily: "SF Mono",
    fontWeight: 500,
    borderRadius: "4px",
    fontSize: "13px",
    padding: "9px 16px",
    "&:hover": {
      backgroundColor: "rgba(100,255,218,0.1)",
      color: theme.palette.secondary.main,
    },
  },

  "@keyframes pulse": {
    "0% ": {
      boxShadow: `0 0 0 0px ${theme.palette.primary.silver}`,
    },
    "100%": {
      boxShadow: "0 0 0 15px rgb(0 0 0 / 0%);",
    },
  },
  menu: {
    backgroundColor: "#fff",
    boxShadow: "0px 10px 40px 0px rgb(47 47 47 / 10%)",
    transition: "background .3s,border .3s,border-radius .3s,box-shadow .3s",
    color: "#000",
    borderRadius: "0px",
    maxWidth: "100%",
    //left: '0px !important',
  },
  menuItem: {
    fontFamily: "Montserrat",
    textTransform: "none",
    fontWeight: 700,
    fontSize: "14px",

    color: "#000",
    transition: ".3s",
    opacity: 0.9,
    "&:hover": {
      opacity: 1,
    },
    "&.Mui-selected": {
      opacity: 1,
    },
  },
  drawerIcon: {
    width: 40,
    height: 40,
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("769"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setOpenDrawer(false);
  }, [matchesSM]);

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        // classes={{ paper: classes.drawer }}
      >
        {/* <div className={classes.toolbarMargin} /> */}
        <List onClick={() => setOpenDrawer(false)}>
          {pages.map((item, i) => (
            <Link
              href={`${item.url}`}
              key={i}
              style={{ textDecoration: "none" }}
            >
              <ListItem divider button>
                <ListItemText className={classes.tab} disableTypography>
                  {item.label}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
  return (
    <ElevationScroll {...props}>
      <AppBar
        //position="static"

        position='fixed'
        //position="sticky"
        elevation={trigger ? 5 : 0}
        style={{
          // position: '-webkit-sticky',
          //position: 'fixed',
          boxShadow: trigger ? "0 10px 30px -10px rgb(2 12 27 / 70%)" : "none",
          backgroundColor: trigger
            ? "rgba(10, 25, 47, 0.85)"
            : theme.palette.primary.main,
          //transform: trigger ? 'translateY(0px)' : 'translateY(calc(70px * -1))',
        }}
        className={classes.appBar}
      >
        <Toolbar disableGutters className={classes.container}>
          <Grid
            container
            justifyContent='space-between'
            alignItems='center'
            wrap='nowrap'
          >
            <Grid item>
              <Link href='/'>
                <a
                  style={{
                    color: theme.palette.secondary.main,
                  }}
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    version='1'
                    viewBox='0 0 375 375'
                    style={{
                      width: "45px",
                      height: "44px",
                      fill: theme.palette.secondary.main,
                    }}
                    stroke={theme.palette.secondary.main}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='10'
                    d='M39 0L0 22 0 67 39 90 78 68 78 23z'
                  >
                    <defs>
                      <path d='M39.29 17.113h296.25v340.5H39.29zm0 0'></path>
                    </defs>
                    <path
                      fillOpacity='1'
                      fillRule='nonzero'
                      d='M39.293 102.238v170.25l148.121 85.125 148.121-85.125v-170.25l-148.12-85.125-148.122 85.125m288.219 4.633V267.86l-140.098 80.493-140.098-80.493V106.871l140.098-80.496 140.098 80.496'
                    ></path>
                    <g transform='translate(95 95)'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='169.8'
                        height='169.8'
                        fill='none'
                        stroke='currentColor'
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
                  </svg>
                </a>
              </Link>
            </Grid>
            {!matchesSM && (
              <Grid item style={{ flex: 1 }}>
                <Grid container justifyContent='center' spacing={8}>
                  {pages.map((item, i) => (
                    <Grid
                      item
                      key={i}
                      onClick={() => setOpenDrawer((openDrawer) => !openDrawer)}
                    >
                      <div
                        onClick={() => {
                          console.log(item.url);
                          document
                            .getElementById(item.url.replace("#", ""))
                            ?.scrollIntoView({
                              behavior: "smooth",
                            });
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          data-aos='fade-up'
                          data-aos-duration='1000'
                          variant='h4'
                          className={classes.tab}
                        >
                          <span style={{ color: theme.palette.secondary.main }}>
                            0{i + 1}.
                          </span>{" "}
                          {item.label}
                        </Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}

            <Grid item>
              {matchesSM ? (
                <MenuIcon />
              ) : (
                <Button
                  componnt='a'
                  href='/resume.pdf'
                  download='resume.pdf'
                  target='_blank'
                  variant='outlined'
                  className={classes.button}
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  Resume
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
