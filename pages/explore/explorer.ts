import styled from "styled-components";

export const Explorer = styled.main`
background: #00000095;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
button + button {
  margin-top: 10px;
}
`
