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
  width: 180px;
  color: #eaebed;

  a{
    color: #eaebed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
}
button + button {
  margin-top: 10px;
}
`
export default Explorer
