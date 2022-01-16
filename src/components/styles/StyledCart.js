import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
  background-color: var(--cart-bg);
`;

export const Wrapper = styled.div`
  padding: 2rem;
  ${mobile({ padding: "1rem" })}
  background-color: var(--cart-bg);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: var(--cart-title);
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

export const TopButton = styled.button`
  padding: 1rem;
  font-weight: 600;
  font-size: var(--cart-button);
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  color: ${(props) => props.type === "filled" && "white"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
`;

export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

export const TopText = styled.span`
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: underline;
  font-size: var(--cart-top-text);
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

export const Image = styled.img`
  width: 20rem;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 2rem;
`;

export const ProductName = styled.span`
  font-size: var(--cart-product-name);
`;

export const ProductId = styled.span`
  font-size: var(--cart-product-id);
`;

export const ProductColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span`
  font-size: var(--cart-product-size);
`;

export const PriceDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ProductAmount = styled.div`
  margin: 0.5rem;
  font-size: var(--cart-product-amount);
  ${mobile({ margin: "0.5rem 1.5rem" })}
`;

export const ProductPrice = styled.div`
  font-size: var(--cart-product-price);
  ${mobile({ marginBottom: "2rem" })}
`;

export const Hr = styled.hr`
  margin: 2rem auto 1rem;
  border: none;
  height: 0.1rem;
  background-color: #8b8b8b;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5 solid lightgrey;
  border-radius: 1rem;
  padding: 2rem;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-size: var(--cart-summary-title);
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  font-weight: ${(props) => props.type === "total" && "500"};
  /* font-size: ${(props) => props.type === "total" && "24px"}; */
`;

export const SummaryItemText = styled.span`
  font-size: var(--cart-summary-item-text-price);
`;

export const SummaryItemPrice = styled.span`
  font-size: var(--cart-summary-item-text-price);
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  color: white;
  font-weight: 600;
  font-size: var(--cart-button);
  background-color: black;
`;
