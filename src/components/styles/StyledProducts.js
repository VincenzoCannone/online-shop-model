import styled from "styled-components";
import { keepItNarrow } from "../../bigscreenbreakpoint";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 0;
  background: var(--product-bg);

  ${keepItNarrow()}
`;

export default Container;
