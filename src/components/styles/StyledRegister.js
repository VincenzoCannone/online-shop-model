import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(138, 122, 101, 0.5)
    ),
    url("https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
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
  font-family: "roboto";
  font-size: var(--register-input);
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

export const Agreement = styled.span`
  font-family: "roboto";
  font-size: var(--register-agreement);
  margin: 20px 0;
`;

export const Button = styled.button`
  font-family: "roboto";
  font-size: var(--register-button);
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
