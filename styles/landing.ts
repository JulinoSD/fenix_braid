import styled from 'styled-components'

export const Landing = styled.div`
    width: 100vw;
    height: 100vh;

    .invite {
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 15px 15px 0 0;
        width: 100%;
        height: 10%;
        background: #fff;
        color: #000;
        z-index: 100;
    }
    .btnInfo {
        color: #0a3fdf;
        background: none;
        outline: 2px solid #0a3fdf;
        transition: 2s;
    }
    .btnInfo:hover {
        background: #00ffdf55;
    }
    .navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      font: 300 10px 'Ubuntu', sans-serif;

      .navigationLink {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
`;
