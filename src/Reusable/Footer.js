import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
  },
  link: {
    color: "#a8b2d1",
    fontFamily: "SF Mono",
    fontSize: "12px",
    lineHeight: "1",
    textDecoration: "none",
    padding: "10px",
    display: "inline-block",
    transition: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  svg: {
    marginRight: "5px",
    width: "14px",
    height: "14px",
  },
}));
export default function Footer() {
  const { t } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.root}
    >
      {/* social */}
      <Grid item>
        <Grid
          container
          justifyContent='center'
          style={{ gap: "20px", marginBottom: "10px" }}
        >
          {t("common.social", { returnObjects: true }).map((item, i) => (
            <Grid item key={i} style={{ padding: "10px" }}>
              <a
                href={item.url}
                aria-label={item.name}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={`/dev/socialIcons/${item.svg}`}
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <a
          href={t("common.github")}
          className={classes.link}
          rel='noopener noreferrer'
          target='_blank'
          style={{ marginBottom: "15px" }}
        >
          {t("home.footer.build")}
        </a>
      </Grid>
    </Grid>
  );
}
