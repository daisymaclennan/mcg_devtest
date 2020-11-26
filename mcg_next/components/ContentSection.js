import React from "react";
import styled from "styled-components";

const ContentSection = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledContentSection = styled(ContentSection)`
  position: absolute;
  top: 35vh;
  height: 50vh;
  left: 200px;
  width: 40vw;
  z-index: 1;
  max-width: 400px;

  @media screen and (max-width: 800px) {
    position: static;
    height: auto;
    margin-top: 150px;
    margin-left: 45px;
    margin-bottom: 100px;
    width: calc(100vw - 90px);
  }

  @media screen and (max-width: 1300px) {
    left: 100px;
  }
`;

export default StyledContentSection;
