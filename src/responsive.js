import { css } from "styled-components";

//? WHY the variable is not in Capital Letter ?  Mobile instead of mobile??
//? Why we have to repeat in line 5 and 15  "export"
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export default mobile;
