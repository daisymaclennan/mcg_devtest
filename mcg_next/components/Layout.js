import React from "react"
import { createGlobalStyle } from "styled-components"
import Head from 'next/head'
import Link from "next/link";
import Logo from "./Logo"
import BackgroundLines from "./BackgroundLines"
import RightSidebar from "./RightSidebar"
import ScrollNavigate from "./ScrollNavigate"

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
  font-family: 'Gilroy';
  height: 300vw;
}

`

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>MCG</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Logo />
    <BackgroundLines />
    <ScrollNavigate />
    <RightSidebar />
    {children}
  </div>
)

export default Layout
