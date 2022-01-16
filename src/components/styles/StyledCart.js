import styled from "styled-components";
import mobile from "../../responsive";

export const Container = styled.div`
  background-color: var(--cart-bg);
`;

export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
  background-color: var(--cart-bg);
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-size: var(--cart-title);
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  font-size: var(--cart-button);
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

export const TopText = styled.span`
  text-decoration: underline;
  margin: 0 10px;
  cursor: pointer;
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
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const ProductName = styled.span`
  font-size: var(--cart-product-name);
`;

export const ProductId = styled.span`
  font-size: var(--cart-product-id);
`;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span`
  font-size: var(--cart-product-size);
`;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: var(--cart-product-amount);
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

export const ProductPrice = styled.div`
  font-size: var(--cart-product-price);
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5 solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
  font-size: var(--cart-summary-title);
`;

export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
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
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: var(--cart-button);
`;
