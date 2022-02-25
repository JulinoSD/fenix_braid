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
  margin-bottom: 80px;
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
  flex-wrap: wrap;
  background: #fff;
  .card {
    display: grid;
    width: 435px;
    height: 410px;
    background: #fff;
    color: #000;
    border-radius: 10px;
    box-shadow: 0 0 1em black;
    .reaction {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
  .card:first-child {
    margin-top:87px;
  }
  .card:not(:first-child) {
    margin-top:8px;
  }
  .photo{
    display: grid;
    width: 435px;
    height: 380px;
    background: black;
    border-radius: 10px;
    place-content: center;
    color: #fff;
  }
  img {
    width: 100%;
    height: 350px;
    background: black;
  }
}
`
