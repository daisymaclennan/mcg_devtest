import React from "react";
import styled from "styled-components";
import SocialIcons from "./SocialIcons";

const RightSidebar = ({ className }) => (
  <div className={className}>
    <span>En</span>
    <h4>Welcome to MCG</h4>
    <div></div>
    <SocialIcons />
  </div>
);

const StyledRightSidebar = styled(RightSidebar)`
  position: fixed;
  top: 20px;
  right: 0;
  height: calc(100vh - 40px);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  z-index: 1;

  span {
    margin-right: 19px;
    font-weight: 600;
  }

  h4 {
    margin-right: -50px;
    transform: rotate(90deg);
    font-weight: 400;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.3em;
  }

  div {
    height: 12px;
  }

  @media screen and (max-width: 800px) {
    span {
      margin-right: 9px;
    }
    h4 {
      margin-right: -60px;
    }
  }
`;

export default StyledRightSidebar;
