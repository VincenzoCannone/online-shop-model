import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div``;

export const Title = styled.h1`
  padding-left: 2rem;
  font-size: var(--productlist-title);
  background-color: var(--productlist-top-bg);
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--productlist-top-bg);
`;

export const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

export const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
  ${mobile({ margin: "10px 0" })}
`;

export const Option = styled.option``;
