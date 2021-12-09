import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 60px;
  background-color: green;
`;

const Wrapper = styled.div`
  padding: 10px 25px;
  display: flex;
`;

const Left = styled.div``;

const Center = styled.div``;

const Right = styled.div``;

const navbar = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default navbar;
