import { Alert, Button, Input, Typography } from "antd";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import Link from "next/link";
import Router from "next/router";

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { LoginContainer, LoginFormWrapper } from "../styles/Auth.Styles";
import { withPublic } from "./components/ProtectRoute";
// @ts-ignore
import { auth } from "@project/shared/";
function SignUp() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const [values, setValues] = useState<any>({
    name: "",
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
    setIsRegistering(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values?.email,
        values.password
      );
      await updateProfile(res?.user, {
        displayName: values.name || null,
      });
      setIsRegistering(false);
      console.log("res", res);
      Router.replace("/");
    } catch (error: any) {
      console.log("error", error);
      setError(error?.message || "Fail to register");
    } finally {
      setIsRegistering(false);
    }
  };
  return (
    <LoginContainer>
      <LoginFormWrapper>
        <Typography.Title>SIGNUP</Typography.Title>
        {error && (
          <>
            <Alert type="error" message={error} />
            <br />
          </>
        )}

        <form onSubmit={submitHandler}>
          <Input
            placeholder="Name"
            size="large"
            name="name"
            onChange={handleOnChange}
          />
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
            loading={isRegistering}
          >
            Register
          </Button>
          <Typography.Text strong>OR</Typography.Text>
          <Link href="/login">Login</Link>
        </form>
      </LoginFormWrapper>
    </LoginContainer>
  );
}
export default withPublic(SignUp);
