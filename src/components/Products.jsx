import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [items, setItems] = useState([]);

  const fetchingData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setItems(data);
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <Container>
      {/* {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))} */}
      {items.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Products;
