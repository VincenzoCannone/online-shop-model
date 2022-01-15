import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
      }

      html {
        --body-bg: #f5f5f5;
        --announcement-bg: #f18d9e;
        --navbar-bg: white;
        --categories-bg: #d8d3bf;
        --product-bg: #A7A5AA;
        --products-bg:#a1d6e2;
        --newsletter-bg: #cacaca;
        --footer-bg: #3b3b3b;

        ${"" /* =================== */}

        --font-bright: white;
      }

      h1, h2, h3 {
        font-family: 'Kaushan Script', cursive;
      }

      p, div, span, input {
        font-family: 'Slabo 13px', serif;
      }

      body {
        width: 90%;
        margin: auto;
        background-color: var(--body-bg);
      }
`;

export default GlobalStyle;
