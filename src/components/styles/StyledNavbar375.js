import styled, { keyframes } from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 6rem;
  background-color: var(--navbar-bg);
  position: relative;
  display: none;
  ${mobile({ height: "6rem", display: "block" })}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 2rem;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Logo = styled.h1`
  font-weight: bold;
  font-size: var(--navbar-logo-mobile);
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const Menue = styled.div`
  position: absolute;
  background: #dbdbdb;
  top: 0;
  left: ${(props) => (props.isOpen ? 0 : "-100vw")};
  width: 100vw;
  height: 100vh;
  transition: all 0.5s ease-in-out;
  z-index: 50;
`;

export const MenueContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 10rem;
  font-size: 2rem;
  color: #444444;
  font-family: "roboto";
`;

const turnIt = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0;};
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  border: 2px solid #444444;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0.8;
`;

export const MenueClose = styled.span`
  position: relative;
  font-size: 2.5rem;
  color: #444444;
  font-family: "roboto";

  /* animation: ${turnIt} 1s forwards; */
`;

export const List = styled.li`
  list-style-type: none;
  padding: 0 2rem;
  font-weight: 600;
  letter-spacing: 0.6rem;
  &:hover {
    background-color: #cde6ec;
  }
`;

export const Link = styled.a`
  color: #444444;
  line-height: 2.2;
  text-decoration: none;
`;
