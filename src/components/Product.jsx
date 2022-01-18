import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import { Info, Container, Circle, Image, Icon } from './styles/StyledProduct';

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
        </Icon>
        <Icon>
          <SearchOutlined style={{ fontSize: "2rem" }} />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined style={{ fontSize: "2rem" }} />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
