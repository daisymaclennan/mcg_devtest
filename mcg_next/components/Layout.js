import React from "react"
import { createGlobalStyle } from "styled-components"
import Head from 'next/head'
import Link from "next/link";
import BackgroundLines from "./BackgroundLines"

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Gilroy';
  font-weight: 500;
  src:  url('/fonts/Gilroy-Light.otf') format('opentype');
}
@font-face {
  font-family: 'Gilroy';
  font-weight: 600;
  src:  url('/fonts/Gilroy-Bold.otf') format('opentype');
}
@font-face {
  font-family: 'Gilroy';
  font-weight: 700;
  src:  url('/fonts/Gilroy-ExtraBold.otf') format('opentype');
}
body{
  background-image: linear-gradient(180deg, #F4F4F4 0%, #FFFFFF 100%);
  background-repeat: no-repeat;
  margin: 0 40px;
  font-family: 'Gilroy';
}

`

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>MCG</title>
      <link rel="icon" href="/favicon.ico" />
      <link
          rel="preload"
          href="/fonts/Gilroy-Bold.otf"
          as="font"
          crossOrigin=""
      />
      <link
          rel="preload"
          href="/fonts/Gilroy-ExtraBold.otf"
          as="font"
          crossOrigin=""
      />
      <link
          rel="preload"
          href="/fonts/Gilroy-Light.otf"
          as="font"
          crossOrigin=""
      />
    </Head>
    <GlobalStyle />
    <BackgroundLines />
    {children}
  </div>
)

export default Layout
