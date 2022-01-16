import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
  width: 90vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(58, 108, 173, 0.5)),
    url("https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: var(--login-title);
  font-weight: 300;
`;

export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  margin: 5px 0;
  font-size: var(--login-link);
  text-decoration: underline;
  cursor: pointer;
`;
