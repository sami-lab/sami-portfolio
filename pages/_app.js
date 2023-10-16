import React, { useState, useEffect } from "react";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import PropTypes from "prop-types";
import Head from "next/head";
import { useScrollTrigger, Box } from "@material-ui/core/";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";

import AOS from "aos";
import "aos/dist/aos.css";
import "../src/i18n";

import theme from "../src/theme";
import Header from "../src/Reusable/header";
import Footer from "../src/Reusable/Footer";
import Loader from "../src/Reusable/Loader";
import { useTranslation } from "react-i18next";

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: "fixed", bottom: 16, right: 75, zIndex: 1 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}
export default function MyApp(props) {
  const { Component, pageProps } = props;
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>{t("seo.title")}</title>
        <meta content='yes' name='apple-mobile-web-app-capable' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta charSet='UTF-8' />
        <meta name='robots' content='max-image-preview:large' />
        <meta name='robots' content='index, follow' />
        <meta
          name='googlebot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={t("seo.title")} />
        <meta property='og:description' content={t("seo.description")} />
        <meta property='og:url' content={`/`} key='og:url' />
        <meta property='og:site_name' content={t("seo.title")} />

        <html lang='en' />

        <meta name='description' content={t("seo.description")} />
        <meta name='image' content={t("seo.image")} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={"/"} />
        <meta property='og:title' content={t("seo.title")} />
        <meta property='og:description' content={t("seo.description")} />
        <meta
          property='og:image:url'
          itemProp='thumbnail'
          content={`${t("seo.image")}?source=opengraph`}
        />
        <meta
          property='og:image'
          itemProp='thumbnail'
          content={`${t("seo.image")}?source=opengraph`}
        />
        <meta property='og:image:width' content='200' />
        <meta property='og:image:height' content='200' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content={t("seo.twitterUsername")} />
        <meta name='twitter:title' content={t("seo.title")} />
        <meta name='twitter:description' content={t("seo.description")} />
        <meta name='twitter:image' content={t("seo.image")} />
        <link rel='canonical' key='canonical' href={`/`} />
        <script type='text/javascript' src='/tawk.js'></script>
      </Head>
      <link
        itemProp='thumbnailUrl'
        href={`${t("seo.image")}?source=opengraph`}
      />
      <span
        itemProp='thumbnail'
        itemScope
        itemType='http://schema.org/ImageObject'
      >
        <link itemProp='url' href={`${t("seo.image")}?source=opengraph`} />
      </span>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {isLoading ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Header />

            <Component {...pageProps} />
            <ScrollTop {...props}>
              <Fab
                color='secondary'
                size='small'
                aria-label='scroll back to top'
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
            <Footer />
          </>
        )}
      </ThemeProvider>
      <style jsx>{`
        @font-face {
          font-family: "SF Mono";
          src: url("/fonts/SFMono-Regular-8799e6387338d58f2f137df821c86eb4.woff2");
        }
        @font-face {
          font-family: "Calibre";
          src: url("/fonts/Calibre-Medium-568dce56f869a519a015d3b69443b067.woff2");
        }
        @font-face {
          font-family: "Calibre-Regular";
          src: url("/fonts/Calibre-Regular-b0d4cbb1201155ddccc21d1b8059a670.woff2");
        }
        @font-face {
          font-family: "Calibre-Semibold";
          src: url("/fonts/Calibre-Semibold-94fc73852539d6733dc0d80252c5e3fb.woff2");
        }
      `}</style>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
