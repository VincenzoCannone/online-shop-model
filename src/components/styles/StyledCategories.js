import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: var(--categories-bg);
  width: var(--container-width);
  margin: auto;

  ${mobile({ padding: "0", flexDirection: "column", width: "100%" })}
`;

export default Container;
