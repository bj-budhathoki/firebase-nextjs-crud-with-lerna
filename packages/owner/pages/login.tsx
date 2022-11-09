import { Alert, Button, Input, Typography } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { LoginContainer, LoginFormWrapper } from "../styles/Auth.Styles";
import { withPublic } from "./components/ProtectRoute";

function Login() {
  const [isLogingIn, setIsLogingIn] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const [values, setValues] = useState<any>({
    email: "",
    password: "",
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
    setIsLogingIn(true);
    try {
      await login(values?.email, values.password);
    } catch (error: any) {
      setError("incorrect credentials");
    } finally {
      setIsLogingIn(true);
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
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={isLogingIn}
          >
            Login
          </Button>
          <Typography.Text strong>OR</Typography.Text>

          <Link href="/signup">SignUp</Link>
        </form>
      </LoginFormWrapper>
    </LoginContainer>
  );
}
export default withPublic(Login);
