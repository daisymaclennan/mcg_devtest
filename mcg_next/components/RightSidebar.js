import React from "react"
import styled from "styled-components"

const RightSidebar = ({ className }) => (
  <div className={className}>
    <span>En</span>
    <h4>Welcome to MCG</h4>
    <div>
    </div>
  </div>
)

const StyledRightSidebar = styled(RightSidebar)`
position: fixed;
top: 20px;
right: 0;
height: calc(100vh - 40px);
display: flex;
justify-content: space-between;
align-items: flex-end;
flex-direction: column;

span, h4{
  transform: rotate(90deg);
}

span{
  margin-right: 9px;
}

h4{
  margin-right: -45px;
}
`

export default StyledRightSidebar
