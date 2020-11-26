import React, { useEffect } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const ImageBackground = ({ className, src, alt }) => {
  return <img className={className} src={src} alt={alt} />;
};

const StyledImageBackground = styled(ImageBackground)`
  height: 100vh;
  transform: scaleX(-1);
  position: absolute;
  top: 0;
  right: 0px;
  object-fit: cover;
`;

export default StyledImageBackground;
