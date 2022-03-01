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
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 100;
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
    .number {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font: 300 12px 'Ubuntu', sans-serif;
        text-transform: uppercase;
      }
      .name {
        font: 600 12px 'Ubuntu', sans-serif;
        text-transform: uppercase;
      }
    }
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
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  .card {
    display: grid;
    width: 435px;
    height: 410px;
    background: #fff;
    color: #000;
    border-radius: 10px;
    box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.125rem 1.25rem 0 rgba(0, 0, 0, 0.19);
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
    position: relative;
    display: grid;
    width: 435px;
    height: 380px;
    background: black;
    border-radius: 10px;
    place-content: center;
    color: #fff;
    // z-index: -1;
    Image {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  img {
    width: 100%;
    height: 350px;
    background: black;
  }
}
`
