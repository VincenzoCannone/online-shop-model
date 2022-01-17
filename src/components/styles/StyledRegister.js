import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(138, 122, 101, 0.5)
    ),
    url("https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")
      center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 2rem;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
  font-family: "roboto";
  font-size: var(--register-title);
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 2rem 1rem 0 0;
  padding: 1rem;
  font-family: "roboto";
  font-size: var(--register-input);
`;

export const Agreement = styled.span`
  margin: 2rem 0;
  font-family: "roboto";
  font-size: var(--register-agreement);
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1.5rem 2rem;
  font-family: "roboto";
  font-size: var(--register-button);
  color: var(--font-bright);
  background-color: var(--create-button);
  cursor: pointer;
`;
