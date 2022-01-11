import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        width: 90%;
        margin: auto;
        background-color: #363f57;
      }
`;

export default GlobalStyle;
