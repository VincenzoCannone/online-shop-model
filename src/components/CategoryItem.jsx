import {
  Container,
  Image,
  Info,
  Title,
  Button,
} from "./styles/StyledCategoryItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {

  const [theCSS, setCSS] = useState({ color: '#fff', letterSpacing: '0', textShadow: "2px 2px 8px #888" });

  const changeIt = () => {
    setCSS({ color: '#fff', letterSpacing: '0.5rem', textShadow: "2px 2px 8px #333" });
  }

  const setBack = () => {
    setCSS({ color: '#fff', letterSpacing: '0', textShadow: "2px 2px 8px #888" });
  }

  return (
    <Container onMouseOver={changeIt} onMouseLeave={setBack}>
      <Link to={`/products/${item.cat}`}></Link>
      <Image src={item.img} />
      <Info>
        <Title style={theCSS}>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
