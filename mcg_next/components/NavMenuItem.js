import React from "react"
import styled from "styled-components"

const NavMenuItem = ({ className, title, number }) => (
  <div className={className}>
    <h4>{title}</h4>
    <span>{number}</span>
  </div>
)

const StyledNavMenuItem = styled(NavMenuItem)`
display: flex;
align-items: center;
margin-left: calc(calc(100vw - 423px) /4);
border-bottom: 1px solid black;

h4, span{
  font-weight: 400;
}

h4{
  font-size: 12px;
  letter-spacing: 0.03em;
  color: #D3D3D3;
  width: 60px;
  text-transform: uppercase;
}

span{
  font-size: 36px;
  margin-left: 10px;
}
`

export default StyledNavMenuItem
