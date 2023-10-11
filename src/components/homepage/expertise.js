import React from "react";
import { Typography, Grid, useMediaQuery, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useTranslation, Trans } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  heading: {
    width: "100%",
    fontSize: "clamp(24px,5vw,32px)",
    whiteSpace: "nowrap",
    fontWeight: "600",
    color: "#ccd6f6",
    lineHeight: "1.1",
    fontFamily: "Calibre",
    textAlign: "center",
    marginBottom: "10px",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "15px",
    position: "relative",
    [theme.breakpoints.down("1080")]: {
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    },
  },
  card: {
    position: "relative",
    cursor: "default",
    width: "100%",

    padding: "2rem 1.75rem",
    borderRadius: 0,
    backgroundColor: "transaprent",
    border: "2px solid #ccd6f6",
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    // '&:hover': {
    //   transform: 'translateY(-7px)',
    //   '& $cardHeading': {
    //     color: theme.palette.secondary.main,
    //   },
    // },
  },

  cardHeading: {
    textDecoration: "none",
    fontSize: "22px",
    whiteSpace: "nowrap",
    fontWeight: "600",
    color: "#ccd6f6",
    lineHeight: "1.1",
    fontFamily: "Calibre",
    position: "static",
    zIndex: 1,
    "& span": {
      position: "relative",
      zIndex: 1,
    },
    "& span::after": {
      transition: "all 0.1s ease-in-out",
      content: "' '",
      position: "absolute",
      bottom: "13.5%",
      zIndex: "-1",
      height: "0.3em",
      width: "104%",
      left: "-1%",
    },
  },
  cardDescription: {},
  cardDescriptionText: {
    "& ::before": {
      content: '"<h3>"',
      marginBottom: "5px",
      opacity: "0.3",
      display: "block",
      marginLeft: "-35px",
      fontWeight: "normal",
      fontSize: "14px",
    },
    "& ::after": {
      content: '"<h3>"',
      marginTop: "5px",
      opacity: "0.3",
      display: "block",
      marginLeft: "-35px",
      fontWeight: "normal",
      fontSize: "14px",
    },
  },
}));
export default function expertise() {
  const { t, ready } = useTranslation();

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("700"));

  const style = {
    cardHeadingDF058D: {
      "& ::after": {
        background:
          "linear-gradient(65deg, #DF058D 0%, #DF058D 100%, rgba(255, 209, 0, 0) 100%)",
      },
    },
  };
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.root}
    >
      <Grid item>
        <Typography
          data-aos='fade-up'
          data-aos-duration='2000'
          varaint='body1'
          className={classes.heading}
        >
          My Expertise
        </Typography>
      </Grid>
      {ready && (
        <Grid item style={{ marginTop: "30px", width: "100%" }}>
          <div className={classes.cardContainer} id='skills'>
            {t("home.expertise.skills", { returnObjects: true }).map((p, i) => (
              <Grid
                item
                key={i}
                data-aos='fade-up'
                data-aos-duration='2000'
                style={{ display: "flex" }}
              >
                <Grid container direction='column' className={classes.card}>
                  <Grid item>
                    <Grid container wrap='nowrap'>
                      <Grid item>
                        <img
                          src={`/dev/skillsIcon/${p.icon}`}
                          style={{
                            minWidth: "40px",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Grid>
                      <Grid item style={{ flex: 1 }}>
                        <Typography
                          style={{ marginLeft: "30px" }}
                          variant='h3'
                          className={[
                            classes.cardHeading,
                            `cardHeading${p.color.replace("#", "")}`,
                          ].join(" ")}
                        >
                          <span
                            style={
                              style[`cardHeading${p.color.replace("#", "")}`]
                                ? style[
                                    `cardHeading${p.color.replace("#", "")}`
                                  ]
                                : {}
                            }
                          >
                            {" "}
                            {p.name.split("<br/>")[0]}
                          </span>{" "}
                          {p.name.split("<br/>")[1] ? (
                            <>
                              {" "}
                              <br /> {p.name.split("<br/>")[1]}{" "}
                            </>
                          ) : (
                            ""
                          )}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item style={{ marginTop: "15px" }}>
                    <div className={"cardDescription"}>
                      <div
                        variant='body1'
                        className={"cardDescriptionText"}
                        style={{ color: "#8892b0" }}
                      >
                        {p.description}
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </div>
        </Grid>
      )}
      <style>{`
 
      .cardHeadingDF058D span::after{
        background: linear-gradient(65deg, #DF058D 0%, #DF058D 100%, rgba(255, 209, 0, 0) 100%);
    }
      .cardHeading2C49D8 span::after{
          background: linear-gradient(65deg, #2C49D8 0%, #2C49D8 100%, rgba(255, 209, 0, 0) 100%);
      }
      .cardHeadingFF6B2B span::after{
          background: linear-gradient(65deg, #FF6B2B 0%, #FF6B2B 100%, rgba(255, 209, 0, 0) 100%);
      }
      .cardDescriptionText::before{
        content: "<h3>";
        margin-bottom: 10px;
        opacity: 0.3;
        /* color: white; */
        display: block;
        margin-left: -35px;
        font-weight: normal;
        font-size: 14px;
      }
      .cardDescriptionText::after{
        content: "<h3>";
        margin-top: 10px;
        opacity: 0.3;
        display: block;
        margin-left: -35px;
        font-weight: normal;
        font-size: 14px;
      }
      .cardDescription{
        position: relative;
        padding-left: 35px;
        line-height: 1.4;
      }
      .cardDescription::after{
        opacity: 0.3;
        content: '';
        width: 0;
        height: 65%;
        position: absolute;
        background-color: white;
        border: 0.1px solid white;
        bottom: 17%;
        left: 17px;
      }
      `}</style>
    </Grid>
  );
}
