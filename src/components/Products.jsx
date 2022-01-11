import Product from "../components/Product";
import { popularProducts } from "../data";
import Container from './styles/StyledProducts'

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
