import { AddAlert } from "@material-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";
import { useUserAuth } from "../userAuth";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255 0.5), rgba(255, 255, 255, 0.5)),
    url();
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background: white;

  ${mobile({
    width: "75%",
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const LinkItem = styled(Link)`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        {error && <AddAlert>{error}</AddAlert>}
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          <LinkItem to="/register">DO NOT YOU REMEBER PASSWORD?</LinkItem>
          <LinkItem to="/register">CREATE A NEW ACCOUNT</LinkItem>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Login;
