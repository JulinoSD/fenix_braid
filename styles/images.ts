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
    // width: 70%;
    height:100%;
    display: grid;
    // background: #cecece;
    place-content: center;
  }
  .references {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .number {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .detail {
    margin-top: 5px;
    height: 25px;
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
    .reaction {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
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
