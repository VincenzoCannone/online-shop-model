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
  margin: 2rem;
  ${mobile({ margin: "0 2rem", display: "flex", flexDirection: "column" })}
`;

export const FilterText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-right: 2rem;
  ${mobile({ marginRight: "0" })}
`;

export const Select = styled.select`
  margin-right: 2rem;
  padding: 1rem;
  ${mobile({ margin: "1rem 0" })}
`;

export const Option = styled.option``;
