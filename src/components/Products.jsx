import axios from "axios";
import { useEffect, useState } from "react";
import { popularProducts } from "../data";
import Product from "./Product";
import Container from "./styles/StyledProducts";

const Products = ({ cat, filters, sort }) => {
  //! CHECK
  console.log(cat, filters, sort);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/api/products?category=${cat}`
            : `http://localhost:3000/api/products`
        );

        //! CHECK
        console.log(res);

        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setfilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  //! change popularproducts with filteredProduct (line 53)
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
