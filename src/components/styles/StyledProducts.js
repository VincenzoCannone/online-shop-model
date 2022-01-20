import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem 0;
  background: var(--product-bg);
  width: var(--container-width);
  margin: auto;

  ${mobile({ width: "100%" })}
`;

export default Container;
