import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Container, Title, FilterContainer, Filter, FilterText, Select, Option } from '../../src/components/styles/StyledProductList'

const ProductList = () => {
  return (
    <>
      <Container>
        <Announcement />
        <Navbar />
        <Title>Glasses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products</FilterText>

            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>Blue</Option>
              <Option>Red</Option>
              <Option>Yellow</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>

          <Filter>
            <FilterText>Sort Products</FilterText>
            <Select>
              <Option selected> New arrivals</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc) </Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;
