import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import {
  Container, Wrapper, Title, Top, TopButton, TopTexts, TopText,
  Bottom, Info, Product, ProductDetail, Image, Details, ProductName, ProductId,
  ProductColor, ProductSize, PriceDetail, ProductAmountContainer, ProductAmount,
  ProductPrice, Hr, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice,
  Button
} from '../components/styles/StyledCart';

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.jamesbondlifestyle.com/sites/default/files/styles/semi_width_image/public/images/product/cl019-sunspel-riviera-crew-neck-t-shirt-grey-melange.jpg?itok=VofwzD3p" />
                <Details>
                  <ProductName>
                    <strong>Product:</strong>Shirt
                  </ProductName>
                  <ProductId>
                    <strong>Id:</strong>123456789
                  </ProductId>
                  <ProductColor color="grey" />
                  <ProductSize>
                    <strong>Size:</strong>42
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Eur 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://image.made-in-china.com/202f0j00TIqRgDarvFbS/Custom-100-Cotton-Mens-Green-Polo-Shirts.jpg" />
                <Details>
                  <ProductName>
                    <strong>Product:</strong>PoloShirt
                  </ProductName>
                  <ProductId>
                    <strong>Id:</strong>1234588888
                  </ProductId>
                  <ProductColor color="green" />
                  <ProductSize>
                    <strong>Size:</strong>41
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Eur 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Details</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Eur 30</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Eur 10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>Eur -10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Eur 30</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
