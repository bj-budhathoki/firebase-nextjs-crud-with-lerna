import {
  DeleteFilled,
  EditFilled,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Input,
  Modal,
  Radio,
  Row,
  Typography,
} from "antd";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import {
  Actions,
  Content,
  FormContaner,
  List,
  ListContainer,
  Main,
  Wrapper,
} from "../styles/Home.styles";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const onTaskAdd = (event: React.FormEvent) => {
    event.preventDefault();
    alert(newTask);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <Head>
          <title>CRUD App</title>
          <meta name="description" content="Firebase crud " />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main>
          <Wrapper>
            <FormContaner onSubmit={onTaskAdd}>
              <Input
                size="large"
                placeholder="New task..."
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
              />
              <Button
                type="primary"
                size="large"
                icon={<PlusOutlined />}
                htmlType="submit"
              >
                Add
              </Button>
            </FormContaner>
            <ListContainer>
              <List>
                <Content>
                  <Checkbox />
                  <Typography.Text strong>New task</Typography.Text>
                </Content>
                <Actions>
                  <Button
                    icon={<EditFilled size={5} />}
                    type="ghost"
                    size="small"
                  />
                  <Button
                    icon={<DeleteFilled size={5} />}
                    type="ghost"
                    size="small"
                    danger
                    onClick={showModal}
                  />
                </Actions>
              </List>
            </ListContainer>
          </Wrapper>
        </Main>
      </div>
      <Modal
        title="Delete Todo"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Typography.Text strong>Are you sure??</Typography.Text>
      </Modal>
    </>
  );
}
