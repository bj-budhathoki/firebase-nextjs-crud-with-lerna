import { Button, Input, Typography } from "antd";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { LoginContainer, LoginFormWrapper } from "../styles/Auth.Styles";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <LoginContainer>
      <LoginFormWrapper>
        <Typography.Title>LOGIN</Typography.Title>
        <form>
          <Input placeholder="Email" size="large" />
          <Input.Password placeholder="Password" size="large" />
          <Button type="primary" size="large" htmlType="submit">
            Submit
          </Button>
          <Typography.Text strong>OR</Typography.Text>
          <Typography.Text strong underline>
            Register
          </Typography.Text>
        </form>
      </LoginFormWrapper>
    </LoginContainer>
  );
}
