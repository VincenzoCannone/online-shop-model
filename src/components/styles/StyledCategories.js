import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: var(--categories-bg);

  ${mobile({ padding: "0", flexDirection: "column" })}
`;

export default Container;
