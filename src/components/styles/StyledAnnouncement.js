import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--announcement);
  font-weight: 500;
  height: 6rem;
  /* min-width: var(--container-width); */
  width: var(--container-width);
  margin: auto;
  background-color: var(--announcement-bg);
  color: var(--font-bright);

  ${mobile({ height: "4rem", fontSize: "1.6rem", width: "100%" })}
`;

export default Container;
