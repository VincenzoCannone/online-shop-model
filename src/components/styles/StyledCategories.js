import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background: var(--categories-bg);

  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export default Container;
