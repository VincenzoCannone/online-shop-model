import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
      }

      html {

        ${"" /* BACKGROUND-COLORS */}

        --body-bg: #f5f5f5;
        --announcement-bg: #f18d9e;
        --navbar-bg: white;
        --categories-bg: #d8d3bf;
        --product-bg: #A7A5AA;
        --products-bg:#a1d6e2;
        --newsletter-bg: #cacaca;
        --footer-bg: #3b3b3b;
        --cart-bg: #ffffff;
        --productlist-top-bg: #ffffff;

        ${"" /* ====== FONT COLORS ============= */}

        --font-bright: white;
        --font-dark: #222222;

        ${"" /* ====== FONT SIZES ============= */}

        font-size: 62.5%;
        --announcement: 2.4rem;
        --navbar-logo: 4rem;
        --navbar-language: 1.4rem;
        --navbar-menuitem: 1.4rem;

        --slider-title: 6rem;
        --slider-desc: 2rem;
        --slider-button: 2rem;

        --category-item-title: 8rem;
        --category-item-button: 1.4rem;

        --newsletter-title: 7rem;
        --newsletter-desc: 2.4rem;
        --newsletter-input: 1.6rem;

        --footer-left-headline: 1.6rem;
        --footer-desc: 1.4rem;
        --footer-list-item: 1.4rem;
        --footer-contact-item: 1.4rem;

        --cart-title: 3.5rem;
        --cart-button: 1.8rem;
        --cart-top-text: 1.8rem;
        --cart-product-name: 1.6rem;
        --cart-product-id: 1.4rem;
        --cart-product-size: 1.6rem;
        --cart-product-amount: 2.4rem;
        --cart-product-price: 2.5rem;
        --cart-summary-title: 2.5rem;
        --cart-summary-item-text-price: 1.6rem;

        --login-title: 2.4rem;
        --login-link: 1.2rem;

        --register-title: 2.4rem;
        --register-agreement: 1.2rem;
        --register-input: 1.4rem;
        --register-button: 2rem;

        --productlist-title: 3rem;
      }

      h1, h2, h3 {
        font-family: 'Kaushan Script', cursive;
        color: var(--font-dark);
      }

      p, div, span, input {
        font-family: 'Slabo 13px', serif;
        color: var(--font-dark);
      }

      body {
        width: 90%;
        margin: auto;
        background-color: var(--body-bg);
      }
`;

export default GlobalStyle;
