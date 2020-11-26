import React from "react";
import styled from "styled-components";

const FauxPage = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const StyledFauxPage = styled(FauxPage)`
  position: relative;
  width: 100vw;

  @media screen and (max-width: 800px) {
    height: 100vh;
  }
`;

export default StyledFauxPage;
