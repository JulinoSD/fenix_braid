import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font: 400 16px 'Ubuntu', sans-serif;
        background: ${(props) => props.theme.colors.background}
    }
    a {
        color: inherit;
        text-decoration: none;
      }
    fieldset {
        border: none;
      }
`;