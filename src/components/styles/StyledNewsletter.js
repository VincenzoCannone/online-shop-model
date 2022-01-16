import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
  background: var(--newsletter-bg);
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: var(--newsletter-title);

  ${mobile({ fontSize: "3rem" })}
`;

export const Desc = styled.div`
  font-size: var(--newsletter-desc);
  margin-bottom: 2rem;

  ${mobile({ textAlign: "center" })}
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 4rem;
  background-color: white;
  border: 0.1rem solid lightgray;

  ${mobile({ width: "80%" })}
`;

export const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  padding-left: 2rem;
  font-size: var(--newsletter-input);
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
  background-color: #3d4749;
`;
