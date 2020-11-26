import React from "react"
import styled from "styled-components"

const FauxPage = ({ className, children }) => (
    <div className={ className }>
        {children}
    </div>
)

const StyledFauxPage = styled(FauxPage)`
position: relative;
width: 100vw;
`

export default StyledFauxPage