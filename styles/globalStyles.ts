import { createGlobalStyle } from 'styled-components'
import Fundo from '../public/fundo.png'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font: 400 16px 'Ubuntu', sans-serif;
        background: #1a2027;
        background-size: cover;
        color: ${props => props.theme.colors.text};
    }
    li {
      list-style: none;
    }
    a {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        background: ${props => props.theme.colors.primary}
      }
    fieldset {
        border: none;
    }
    button {
      text-transform: uppercase;
      border-radius: 10px;
      border: none;
      //background: ${props => props.theme.dimension.ButtonLanding};
      background: #0096cc;
      padding: 7px;
      color: white;
      font-weight: bold;

    }
    LandingPage {
        background: red;
    }
`;
