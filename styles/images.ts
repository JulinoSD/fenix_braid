import styled from "styled-components";

export const Images = styled.div`
.Header {
  position: fixed;
  background: #868889;
  height: 80px;
  width: 100%;
  color: #fff;
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
    width: 150px;
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
  background: #1a2027;
  .card {
    display: grid;
    width: 380px;
    height: 440px;
    background: #1e1e1e;
    color: #000;
    border-radius: 5px;
    box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.125rem 1.25rem 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
    .photo{
      display: grid;
      width: 380px;
      height: 380px;
      background: red;
      border-radius: 5px;
      color: #fff;
      img {
        width: 100%;
        height: 100%;
        // background: black;
        top: 0;
        // position: relative;
        display: block;

      }
    }
    .cardAction {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 60px;
      z-index: 1;
      background: #1e1e1e;

      .description {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin: 20px;
        .buttonAction {
          color: #eaebed;
          width: 70px;

          display: flex;
          justify-content: space-between;
        }
        button {
          background: none;
        }
      }
    }
  }
  .card:first-child {
    margin-top:87px;
  }
  .card:not(:first-child) {
    margin-top:8px;
  }
}
`
export default Images;
