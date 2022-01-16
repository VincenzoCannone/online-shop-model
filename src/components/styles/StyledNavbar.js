import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  background-color: var(--navbar-bg);
  height: 10vh;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ padding: "10px 0" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ margin: "auto" })}
`;

export const Input = styled.input`
  border: none;
  ${mobile({
    width: "55px",
  })}
`;

export const Logo = styled.h1`
  font-weight: bold;
  font-size: var(--navbar-logo);
  ${mobile({ fontSize: "20px" })}
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 2;
`;

//? why flex:2 is without ""???
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1.5, marginRight: "5px" })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "15px", marginLeft: "10px" })}
`;
