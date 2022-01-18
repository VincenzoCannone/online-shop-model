import { css } from "styled-components";

export const keepItNarrow = (props) => {
  return css`
    @media only screen and (min-width: 1301px) {
      min-width: var(--min-width);
      max-width: var(--max-width);
      margin: auto;
    }
  `;
};

export default keepItNarrow;
