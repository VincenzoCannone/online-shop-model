import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--announcement);
  font-weight: 500;
  height: 6rem;
  width: var(--container-width);
  background-color: var(--announcement-bg);
  color: var(--font-bright);
`;

export default Container;
