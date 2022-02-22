import styled from "styled-components";

export const Images = styled.div`
.Header {
  position: fixed;
  background: #fff;
  height: 80px;
  width: 100%;
  color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .foto p{
    background-color: #000;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    color: #000;
  }
  .preferences {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
.principal {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  .card {
    margin-top: 80px;
    width: 450px;
    height: 420px;
    background: #fff;
    color: #000;
  }
  .photo{
    width: 450px;
    height: 380px;
    background: black;
  }
  img {
    width: 100%;
    height: 350px;
    background: black;
  }
}
`
