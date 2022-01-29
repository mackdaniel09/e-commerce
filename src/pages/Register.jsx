import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useUserAuth } from "../userAuth";

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
  width: 40%;
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
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 4px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          {/* <Input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          /> */}
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
          {/* <Input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassowrd(e.target.value)}
          /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">REGISTER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
export default Register;
