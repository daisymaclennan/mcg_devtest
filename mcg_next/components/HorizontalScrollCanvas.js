import styled from "styled-components"
import React from "react"
import {animated} from 'react-spring'

const HorizontalScrollCanvas = ({ className, children, canvasProps }) => {
  return(
    <animated.div className={ className } style={ canvasProps }>
      {children}
    </animated.div>
  )
}

const StyledHorizontalScrollCanvas = styled(HorizontalScrollCanvas)`
@media screen and (min-width: 801px){
  width: 300vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 0;
}

@media screen and (max-width: 800px){
  position: static!important;
  width: 100vw;
  height: auto;
  padding-bottom: 100px;
}
`

export default StyledHorizontalScrollCanvas
