import React from "react";
import Head from "next/head";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import BasicLayout from "./BasicLayout";

const theme = {
  // brand
  orange: "#f68b23",
  white: "#FFFFFF",

  // font stacks
  plex: '"IBM Plex Sans", sans-serif',
  dawning: '"Dawning of a New Day", cursive'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    color: ${theme.white};
    font-family: ${theme.plex};
    font-size: 18px;
  }
  
  *,
  *:before, *:after {
    box - sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
  
  ol, ul {
    list - style: none;
  }
  
  img {
    max - width: 100%;
    height: auto;
  }
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Muffyn Festival</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Dawning+of+a+New+Day|IBM+Plex+Sans"
          rel="stylesheet"
        />

        <meta name="twitter:site" content="@muffynfestival" />
        <meta property="og:title" content="Muffyn Festival 2019" />
        <meta
          property="og:description"
          content="On March 1st, be wholesome by performing random acts of kindness."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muffyn.org" />
        <meta
          property="og:image"
          content="http://muffyn.org/static/images/opengraph.png"
          key="opengraphImage"
        />
      </Head>

      <BasicLayout>{props.children}</BasicLayout>
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default Page;
