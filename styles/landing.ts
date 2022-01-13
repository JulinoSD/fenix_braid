import styled from 'styled-components'
import fundo from '../../public/images/fundo.png'

export const Landing = styled.section`
    background: red;
    // background-image: url('../../public/images/fundo.png')
    width: 100vw;
    height: 100vh;

    .invite {
        position: absolute;
        bottom: 0;
        left: 2.5%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 1px solid gray;
        border-radius: 15px;
        width: 95%;
        height: 35%;
        // background: linear-gradient(#00ff3315, #00ff3320, #00ff3355);
        background: #00000090;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
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
