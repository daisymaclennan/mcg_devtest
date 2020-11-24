import React from "react"
import styled from "styled-components"

const Titles = ({ className, mainTitle, subtitle }) => (
  <div className={ className }>
    <h2>{mainTitle}</h2>
    <h3>{subtitle}</h3>
  </div>
)

const StyledTitles = styled(Titles)`
margin-bottom: 100px;
h2{
  font-size: 42px;
  margin-bottom: 10px;
  margin-top: 10px;
}

h3{
  font-weight: 400;
  margin-top: 0;
  font-size: 20px;
}
`

export default StyledTitles
