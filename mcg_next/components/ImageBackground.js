import React, { useEffect } from "react"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"

const ImageBackground = ({ className, src, alt}) => {
  const [imageProps, setImage] = useSpring(() => ({transform: "translateX(0) scaleX(-1)"}))

  /*useEffect(() => {
    console.log(scrollY);
    setImage({transform: `translateX(${scrollY / 1.5}px) scaleX(-1)`});
  });*/

  return(
  <animated.img className={ className } style={imageProps} src={ src } alt={ alt } />
  )
}

const StyledImageBackground = styled(ImageBackground)`
height: 100vh;
width: 100vw;
transform: scaleX(-1);
position: absolute;
top: 0;
right: 180vw;
`

export default StyledImageBackground
