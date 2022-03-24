import styled from "styled-components";

export const BraidStyle = styled.main`

.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  // align-items: center;
  // margin: auto;
  justify-content: space-around;
  .card {
    display: grid;
    place-items: center;
    width: 380px;
    height: 520px;
    background: #1e1e1e;
    color: #000;
    border-radius: 5px;
    box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.125rem 1.25rem 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
    margin: 8px;
    .photo{
      display: grid;
      width: 380px;
      height: 400px;
      background: red;
      border-radius: 10px;
      color: #fff;
      img {
        width: 100%;
        height: 100%;
        top: 0;
        display: block;

      }
    }
    .cardAction {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 120px;
      z-index: 1;
      background: #2d2d2d;
      padding: 20px 10px;
      p {
        font: 300 13px 'Ubuntu',sans-serif;
        margin: 10px 0px;
        color: #cecccc;
      }
      h2 {
        font: 400 18px 'Ubuntu',sans-serif;
        color: #eaebed;
      }
      .description {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        .buttonAction {
          color: #eaebed;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 130px;
        }
        .buttonAction::first-child {
          margin-right: 3px;
        }
        button {
          background: none;
        }
      }
    }
  }
}

`
