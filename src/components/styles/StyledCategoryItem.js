import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  flex: 1;
  position: relative;
  margin: 0.3rem;
  height: 70vh;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ heigh: "20vh" })}
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: #ffffff;
  /* text-shadow: 2px 2px 8px #ff0000; */
  font-size: var(--category-item-title);
  transition: all 0.5s ease-in-out;
`;

export const Button = styled.button`
  padding: 1rem;
  border: none;
  cursor: pointer;
  color: gray;
  font-weight: 600;
  font-size: var(--category-item-button);
  background-color: white;
`;
