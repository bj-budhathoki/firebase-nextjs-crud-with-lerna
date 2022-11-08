import {
  DeleteFilled,
  EditFilled,
  LoginOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Col,
  Input,
  Modal,
  Popover,
  Radio,
  Row,
  Space,
  Typography,
} from "antd";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import {
  ListMainContainer,
  Actions,
  Content,
  ContentContainer,
  FormContaner,
  List,
  ListContainer,
  Sidebar,
  Wrapper,
} from "../styles/List.styles";

export default function TodoLists() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [status, setstatus] = useState("all");
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
        <ListMainContainer>
          <Wrapper>
            <Sidebar>
              <div className="user_info">
                <Avatar size="large" />
                <Popover
                  content={<Button icon={<LoginOutlined />}>logout</Button>}
                  trigger="hover"
                  placement="right"
                  title=""
                >
                  <div className="user_name_role">
                    <Typography.Text strong>Bijay Budhathoki</Typography.Text>
                    <div className="role">admin</div>
                  </div>
                </Popover>
              </div>
              <div className="filter-container">
                <Radio.Group value={status}>
                  <Space direction="vertical" size="large">
                    <Radio value="all">All</Radio>
                    <Radio value="active">Active</Radio>
                    <Radio value="completed">Completed</Radio>
                  </Space>
                </Radio.Group>
              </div>
            </Sidebar>
            <ContentContainer>
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
                {[
                  {
                    id: 1,
                    title: "Create todo app",
                    status: "active",
                  },
                  {
                    id: 2,
                    title: "Create todo app",
                    status: "completed",
                  },
                ]?.map((todo) => (
                  <List key={todo?.id}>
                    <Content>
                      <Checkbox checked={todo?.status === "completed"} />
                      <Typography.Text
                        strong
                        delete={todo?.status === "completed"}
                      >
                        {todo?.title}
                      </Typography.Text>
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
                ))}
              </ListContainer>
            </ContentContainer>
          </Wrapper>
        </ListMainContainer>
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
