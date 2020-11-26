import styled from "styled-components"

const ContentSection = styled.div`
position: absolute;
top: 35vh;
height: 50vh;
width: 40vw;
z-index: 1;

@media screen and (max-width: 800px){
    position: static;
    height: auto;
    margin-top: 150px;
    margin-left: 45px;
    margin-bottom: 100px;
    width: calc(100vw - 90px);
}

${props => props.number > 1 ? `left: ${props.number * 100 - 90}vw` : `left: 10vw;`}


`

export default ContentSection
