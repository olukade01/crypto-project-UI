import React from "react";
import styled, { css } from "styled-components";
import ButtonEl from "../atoms/Button";
import InputField from "../atoms/InputField";
import { Text } from "../atoms/Typography";

const AuthWrapper = styled.div`
  background-image: url("../../../assets/images/AuthBg.png");
  background-size: cover;
  opacity: 0.8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AuthCard = styled.div`
  width: 447px;
  padding: 53px 70px 70px;
  background-color: #fff;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 14px 14px rgba(0, 0, 0, 0.09);
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
export const Language = styled.div`
  display: flex;
  align-items: center;
`;
export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
`;
export const SignupOption = styled.div`
  margin-top: 32px;
  color: #dc9217;
  text-align: center;
`;
export const LoginOption = styled(SignupOption)`
  text-align: left;
  border-top: 1px solid lightgray;
  padding-top: 31px;
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img`
  margin-bottom: ${({ login }) => (login ? "20px" : "50px")};
`;

const AuthLayout = ({ title, buttonText, authdata, login }) => {
  return (
    <AuthWrapper>
      <Image login={login} alt="logo" src="../../../assets/images/logo.png" />
      <AuthCard>
        <Title>
          <Text size="20px" weight={600} color="black">
            {title}
          </Text>{" "}
          <Language>EN</Language>
        </Title>
        {authdata.map((data) => (
          <Input>
            {data.label}{" "}
            <InputField
              password={data.label.includes("Password") ? true : false}
              placeholder={data.placeholder}
            />
          </Input>
        ))}
        <ButtonEl
          padding="15px 0"
          color="#fff"
          width="100%"
          children={buttonText}
        />
        {login ? (
          <LoginOption>
            <div>
              Dont nave an Account?{" "}
              <ButtonEl
                bgc="#fff"
                color="#dc9217"
                bg="transparent"
                children={
                  <Text weight={600} color="#dc9217">
                    Register
                  </Text>
                }
              />
            </div>
            <div>Forgot password? Reset it using your account mail</div>
          </LoginOption>
        ) : (
          <SignupOption>
            <ButtonEl
              bg="transparent"
              bgc="#fff"
              color="#dc9217"
              children="Already have an account?"
            />
          </SignupOption>
        )}
      </AuthCard>
    </AuthWrapper>
  );
};

export default AuthLayout;
