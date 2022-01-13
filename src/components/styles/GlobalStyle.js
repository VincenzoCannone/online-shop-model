import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
      }

      html {
        --gray_light: #d4d4d4;
        --white_dark: #f5f5f5;
      }

      body {
        width: 90%;
        margin: auto;
        background-color: var(--white_dark);
      }
`;

export default GlobalStyle;
