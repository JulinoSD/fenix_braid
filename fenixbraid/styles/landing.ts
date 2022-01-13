import styled from 'styled-components'

export const Landing = styled.section`
    background: black;
    width: 100vw;
    height: 100vh;

    .invite {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 1px solid gray;
        border-radius: 15px 15px 0 0;
        width: 100%;
        height: 35%;
        background: linear-gradient(#00ff3315, #00ff3320, #00ff3355);
        z-index: 100;
    }
    .btnInfo {
        color: #0a3fdf;
        // background: #00ffdf;
        background: none;
        outline: 2px solid #0a3fdf;
        transition: 2s;
    }
    .btnInfo:hover {
        background: #00ffdf55;
    }
`;