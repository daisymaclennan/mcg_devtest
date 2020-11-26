import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { animated, useSpring, interpolate } from "react-spring";

const HorizontalScrollCanvas = ({ className, children, scrollY }) => {
  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));

  const parallaxLevel = 1;
  springsetScrollY({ springscrollY: scrollY });

  const interpCanvas = springscrollY.interpolate(
    (o) => `-${o / parallaxLevel}px`
  );
  return (
    <animated.div className={className} style={{ left: interpCanvas }}>
      {children}
    </animated.div>
  );
};

const StyledHorizontalScrollCanvas = styled(HorizontalScrollCanvas)`
  @media screen and (min-width: 801px) {
    width: 300vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 0;

    display: flex;
  }

  @media screen and (max-width: 800px) {
    position: static !important;
    width: 100vw;
    height: auto;
  }
`;

export default StyledHorizontalScrollCanvas;
