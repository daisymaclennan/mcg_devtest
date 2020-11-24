import styled from "styled-components"

const ContentSection = styled.div`
position: absolute;
top: 25vh;
height: 50vh;
width: 40vw;

${props => props.number > 1 ? `left: ${props.number * 100 - 90}vw` : `left: 10vw;`}
`

export default ContentSection
