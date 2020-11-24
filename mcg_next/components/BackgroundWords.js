import React, { useEffect } from "react"
import styled from "styled-components"
import {animated, useSpring} from 'react-spring'

const BackgroundWords = ({ className, words, scrollY}) => {
  const [wordOneProps, setWordOne] = useSpring(() => ({transform: "translateX(0)"}))
  const [wordTwoProps, setWordTwo] = useSpring(() => ({transform: "translateX(0)"}))
  const wordsArr = words.split(" ")

  useEffect(() => {
    console.log(scrollY)
    setWordOne({transform: `translateX(-${scrollY}px)`})
    setWordTwo({transform: `translateX(${scrollY}px)`})
  });

  return(
    <div className={className}>
      <animated.div style={ wordOneProps }>{wordsArr[0]}</animated.div>
      <animated.div className="second-word" style={ wordTwoProps }>{wordsArr[1]}</animated.div>
    </div>
  )
}

const StyledBackgroundWords = styled(BackgroundWords)`
position: absolute;
transform: rotate(90deg);
left: 35vw;
top: 260px;
div{
  font-size: 100px;
  font-weight: 600;
  opacity: 0.3;
}

div:last-of-type{
  margin-left: 30vh;
}
`

export default StyledBackgroundWords
