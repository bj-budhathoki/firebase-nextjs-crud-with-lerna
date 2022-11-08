import { Alert, Button, Input, Typography } from "antd";
import Router from "next/router";

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { LoginContainer, LoginFormWrapper } from "../styles/Auth.Styles";
import { withPublic } from "./components/ProtectRoute";

function Login() {
  const [isLogingIn, setIsLogingIn] = useState(true);
  const [error, setError] = useState("");
  const { login, signup } = useAuth();
  const [values, setValues] = useState<any>({
    email: "",
    password: "",
    role: "user",
  });
  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event?.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogingIn) {
      try {
        await login(values?.email, values.password);
      } catch (error: any) {
        setError("incorrect credentials");
      }
      return;
    } else {
      try {
        await signup(values?.email, values.password);
        Router.replace("/lists");
      } catch (error: any) {
        console.log("error", error?.message);
        setError(error?.message || "Fail to register");
      }
    }
  };
  return (
    <LoginContainer>
      <LoginFormWrapper>
        <Typography.Title>LOGIN</Typography.Title>
        {error && (
          <>
            <Alert type="error" message={error} />
            <br />
          </>
        )}

        <form onSubmit={submitHandler}>
          <Input
            placeholder="Email"
            size="large"
            name="email"
            onChange={handleOnChange}
          />
          <Input.Password
            placeholder="Password"
            size="large"
            name="password"
            onChange={handleOnChange}
          />
          <Button type="primary" size="large" htmlType="submit">
            {!isLogingIn ? "Register" : "Login"}
          </Button>
          <Typography.Text strong>OR</Typography.Text>

          <Button onClick={() => setIsLogingIn(!isLogingIn)} size="large">
            {isLogingIn ? "Register" : "Login"}
          </Button>
        </form>
      </LoginFormWrapper>
    </LoginContainer>
  );
}
export default withPublic(Login);
