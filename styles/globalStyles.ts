import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font: 400 16px 'Ubuntu', sans-serif;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }
    li {
      list-style: none;
    }
    a {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        text-transform: uppercase;
        background: ${props => props.theme.colors.primary}
      }
    fieldset {
        border: none;
    }
    button {
        width: ${props => props.theme.dimension.ButtonLanding.width};
        height: ${props => props.theme.dimension.ButtonLanding.height};
        text-transform: uppercase;
        border-radius: 10px;
        border: none;
        //background: ${props => props.theme.dimension.ButtonLanding};
        background: #009fff;
        color: white;
        font-weight: bold;
        outline: 1px solid #a300ff;
        // border: 1px solid gray;
    }
    LandingPage {
        background: red;
    }
`;
