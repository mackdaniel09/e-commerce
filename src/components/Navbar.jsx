import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useUserAuth } from "../userAuth";

const Container = styled.div`
  height: 60px;

  ${mobile({
    height: "50px",
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    padding: "10px 0",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Lanuage = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({
    display: "none",
  })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;

  ${mobile({
    width: "50px",
  })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;

  ${mobile({
    fontSize: "24px",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({
    flex: 2,
    justifyContent: "center",
  })}
`;
const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black
    ${mobile({
      fontSize: "12px",
      marginLeft: "10px",
    })};
`;
const Navbar = () => {
  let { user } = useUserAuth();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lanuage>EN</Lanuage>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          {!user ? (
            <MenuItem to="/register">REGISTER</MenuItem>
          ) : (
            <MenuItem to="/login">SIGN OUT</MenuItem>
          )}
          <MenuItem to="/cart">
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
