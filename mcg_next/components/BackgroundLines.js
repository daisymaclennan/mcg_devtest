import styled from "styled-components"

const BackgroundLines = styled.div`
  position: fixed;
  width: calc(100vw - 80px);
  top: 0;
  left: 40px;
  right: 40px;
  height: 100vh;
  background: repeating-linear-gradient(to right,
    #D3D3D3 0px,
    #D3D3D3 1px,
    rgba(0,0,0,0) 1px,
    rgba(0,0,0,0) calc(1px + calc(calc(100vw - 84px) /4)),
    #D3D3D3 calc(1px + calc(calc(100vw - 84px) /4))
  );
  border-right: 1px solid #D3D3D3;
  z-index: 1;
`

export default BackgroundLines
