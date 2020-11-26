import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const BrandSquare = ({ className, img, scrollY, level }) => {
  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));

  const parallaxLevel = 1;
  springsetScrollY({ springscrollY: scrollY });

  const interpSquare = springscrollY.interpolate(
    (o) => `translateX(${o / parallaxLevel}px)`
  );

  return (
    <animated.div
      className={className}
      style={{ transform: interpSquare }}
      key={img.url}
    >
      <img src={img.url} alt={img.alt} />
    </animated.div>
  );
};

const StyledBrandSquare = styled(BrandSquare)`
  background-color: black;
  height: 250px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledBrandSquare;
