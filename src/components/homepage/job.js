import React, { useState } from "react";
import { Typography, Grid, useMediaQuery, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

export default function Jobs() {
  const { t, ready } = useTranslation();
  const [selectedPanel, setSelectedPanel] = useState(0);

  const useStyles = makeStyles((theme) => ({
    heading: {
      display: "flex",
      webkitBoxAlign: "center",
      alignItems: "center",
      position: "relative",
      margin: "10px 0px 40px",
      width: "100%",
      fontSize: "clamp(26px,5vw,32px)",
      whiteSpace: "nowrap",
      fontWeight: "600",
      color: "#ccd6f6",
      lineHeight: "1.1",
      fontFamily: "Calibre",
      "&::before": {
        position: "relative",
        bottom: "4px",
        counterIncrement: "section 1",
        content: "'02.'",
        marginRight: "10px",
        color: theme.palette.secondary.main,
        fontFamily: "SF Mono",
        fontSize: "clamp(16px,3vw,20px)",
        fontWeight: "400",
        [theme.breakpoints.down("480")]: {
          marginBottom: "-3px",
          marginRight: "5px",
        },
      },
      "&::after": {
        content: "' '",
        display: "block",
        position: "relative",
        top: "-5px",
        width: "300px",
        height: "1px",
        marginLeft: "20px",
        backgroundColor: "#233554",
        [theme.breakpoints.down("1080")]: {
          width: "200px",
        },
        [theme.breakpoints.down("768")]: {
          width: "100%",
        },
        [theme.breakpoints.down("600")]: {
          marginLeft: "10px",
        },
      },
    },
    font: {
      fontFamily: "SF Mono",
    },
    workUrl: {
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
        height: "1px",
        position: "relative",
        bottom: "0.37em",
        backgroundColor: theme.palette.secondary.main,
        transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
        opacity: 0.5,
      },
    },

    inner: {
      display: "flex",
      [theme.breakpoints.down("480")]: {
        display: "block",
      },
    },
    tabs: {
      position: "relative",
      zIndex: "3",
      width: "max-content",
      padding: "0px",
      margin: "0px",
      listStyle: "none",
      [theme.breakpoints.down("680")]: {
        display: "flex",
        overflowX: "auto",
        width: "calc(100% + 100px)",
        paddingLeft: "50px",
        marginLeft: "-50px",
        marginBottom: "30px",
      },
      [theme.breakpoints.down("480")]: {
        width: "calc(100% + 50px)",
        paddingLeft: "25px",
        marginLeft: "-25px",
      },
    },
    tab: {
      zIndex: 999,
      cursor: "pointer",
      border: "0px",
      borderRadius: "0px",
      textDecoration: "none",
      textDecorationSkipInk: "auto",
      position: "relative",
      transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
      display: "flex",
      webkitBoxAlign: "center",
      alignItems: "center",
      width: "100%",
      height: "42px",
      padding: "0px 20px 2px",
      borderLeft: "2px solid #233554",
      backgroundColor: "transparent",

      fontFamily: "SF Mono",
      fontSize: "13px",
      textAlign: "left",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("768")]: {
        padding: "0px 15px 2px",
      },
      [theme.breakpoints.down("600")]: {
        display: "flex",
        webkitBoxPack: "center",
        justifyContent: "center",
        webkitBoxAlign: "center",
        alignItems: "center",
        minWidth: "120px",
        padding: "0px 15px",
        borderLeft: "0px",
        borderBottom: "2px solid #233554",
        textAlign: "center",
      },
      "&:hover": {
        backgroundColor: "#112240",
        color: theme.palette.secondary.main,
      },
    },
    tabLine: {
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: "10",
      width: "2px",
      height: "42px",
      borderRadius: "4px",
      background: theme.palette.secondary.main,
      transform: `translateY(calc(${selectedPanel} * 42px))`,
      transition: "transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s",
      [theme.breakpoints.down("600")]: {
        top: "auto",
        bottom: "0px",
        width: "100%",
        maxWidth: "120px",
        height: "2px",
        marginLeft: "50px",
        transform: `translateX(calc(${selectedPanel} * 120px))`,
      },
      [theme.breakpoints.down("480")]: {
        marginLeft: "25px",
      },
    },
    panel: {
      width: "100%",
      height: "auto",
      padding: "10px 5px",
    },
    panelHeading: {
      fontSize: "22px",
      fontWeight: "500",
      color: "#ccd6f6",
      lineHeight: "1.3",
      fontFamily: "Calibre",
      marginBottom: "2px",
    },
    range: {
      marginBottom: "25px",
      color: "#a8b2d1",
      fontSize: "13px",
      fontFamily: "SF Mono",
    },
    text: {
      fontWeight: "400",
      color: "#8892b0",
      lineHeight: "1.3",
      fontFamily: "Calibre",
      fontSize: "20px",
      margin: "0px 0px 15px",
    },
    workList: {
      padding: "0px",
      margin: "0px",
      listStyle: "none",
      fontSize: "18px",
      fontFamily: "Calibre",
      fontWeight: 400,
    },
    workItem: {
      position: "relative",
      paddingLeft: "30px",
      marginBottom: "10px",
      color: "#8892b0",
      lineHeight: "1.3",
      "&::before": {
        content: '"▹"',
        position: "absolute",
        left: "0px",
        color: theme.palette.secondary.main,
      },
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("600"));

  const panel0 = (job) => (
    <div
      className={classes.panel}
      // data-aos='fade-down'
      //data-aos-duration='2000'
    >
      <Typography variant='h3' className={classes.panelHeading}>
        {job.position}{" "}
        <span style={{ color: theme.palette.secondary.main }}>@</span>{" "}
        <a href={job.companyUrl} className={classes.workUrl} target={"_blank"}>
          {" "}
          {job.companyFullname}
        </a>
      </Typography>
      <Typography variant='h3' className={classes.range}>
        {job.startDate} - {job.endDate}
      </Typography>
      <ul className={classes.workList}>
        {job.work.map((w, i) => (
          <li className={classes.workItem} key={i}>
            {w}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <Grid
      container
      direction='column'
      className={classes.root}
      data-aos='fade-up'
      data-aos-duration='2000'
    >
      {/* hi text */}
      <Grid item>
        <Typography varaint='body1' className={classes.heading}>
          Where I’ve Worked
        </Typography>
      </Grid>
      <Grid item style={{ width: "100%" }}>
        <div className={classes.inner}>
          <div role='tablist' aria-label='Job tabs' className={classes.tabs}>
            {t("home.experience.jobs", { returnObjects: true }).map(
              (item, i) => (
                <button
                  key={i}
                  id={`tab-${i}`}
                  role='tab'
                  tabIndex={selectedPanel === i ? "0" : "-1"}
                  aria-selected={selectedPanel === i ? "true" : "false"}
                  onClick={() => setSelectedPanel(i)}
                  aria-controls={`panel-${i}}`}
                  className={classes.tab}
                  style={{
                    color:
                      selectedPanel === i
                        ? theme.palette.secondary.main
                        : "#8892b0",
                  }}
                >
                  <span>{item.company}</span>
                </button>
              )
            )}

            <div className={classes.tabLine}></div>
          </div>
          <div
            style={{
              marginLeft: matchesSM ? 0 : "20px",
              width: "100%",
              position: "relative",
            }}
          >
            {panel0(
              t("home.experience.jobs", { returnObjects: true })[selectedPanel]
            )}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
