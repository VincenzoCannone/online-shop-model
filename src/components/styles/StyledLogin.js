import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(58, 108, 173, 0.5)),
    url("https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 2rem;
  background-color: var(--body-bg);
  ${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: var(--login-title);
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem 0;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const Button = styled.button`
  margin-bottom: 1rem;
  padding: 1.5rem 2rem;
  width: 40%;
  border: none;
  cursor: pointer;
  color: white;
  background-color: var(--login-button);
`;

export const Link = styled.a`
  margin: 0.5rem 0;
  text-decoration: underline;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: var(--login-link);
`;
