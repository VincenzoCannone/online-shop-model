import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 6rem;
  height: 10vh;
  background-color: var(--navbar-bg);

  ${mobile({ height: "5rem" })}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 2rem;

  ${mobile({ padding: "1rem 0" })}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Language = styled.span`
  font-size: var(--navbar-language);
  cursor: pointer;

  ${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.5rem;
  padding: 0.5rem;
  border: 0.1rem solid lightgray;

  ${mobile({ margin: "auto" })}
`;

export const Input = styled.input`
  border: none;
  outline: none;

  ${mobile({
    width: "5.5rem",
  })}
`;

export const Logo = styled.h1`
  font-weight: bold;
  font-size: var(--navbar-logo);

  ${mobile({ fontSize: "2rem" })}
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  z-index: 2;
`;

//? why flex:2 is without ""???
export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  ${mobile({ flex: 1.5, marginRight: "0.5rem" })}
`;

export const MenuItem = styled.div`
  margin-left: 2.5rem;
  font-size: var(--navbar-menuitem);
  cursor: pointer;

  ${mobile({ fontSize: "1.5rem", marginLeft: "1rem" })}
`;
