import React from "react"
import styled from "styled-components"

const ScrollNavigate = ({ className }) => (
  <div className={ className }>
    <span className="line-text">
      <hr/>
      Scroll <br />
    </span>
    <span>
      to navigate
    </span>
  </div>
)

const StyledScrollNavigate = styled(ScrollNavigate)`
  position: fixed;
  left: 20px;
  bottom: 80px;
  z-index: 1;
  transform: rotate(90deg);
  transform-origin: 0;

  .line-text{
    display: flex;
    align-items: center;

    hr{
      width: 30px;
    }
  }

  span{
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 400;
  }
`

export default StyledScrollNavigate
