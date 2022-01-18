import styled from "styled-components";
import { mobile } from "../../responsive";
import { keepItNarrow } from "../../bigscreenbreakpoint";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--announcement);
  font-weight: 500;
  height: 6rem;
  min-width: var(--container-width);
  background-color: var(--announcement-bg);
  color: var(--font-bright);

  ${mobile({ height: "4rem", fontSize: "1.6rem" })}

  ${keepItNarrow()}
`;

export default Container;
