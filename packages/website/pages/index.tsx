import {
  DeleteFilled,
  EditFilled,
  LoginOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { async } from "@firebase/util";
import {
  Avatar,
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
import {
  addDoc,
  doc,
  setDoc,
  collection,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import useFetchTasks from "../hooks/useFetchTasks";
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
import { db } from "../uitls/firebase";
import { withProtected } from "./components/ProtectRoute";

function Home() {
  const { logout, currentUser } = useAuth();
  const [isAdding, setIsAdding] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [status, setStatus] = useState("all");
  const { todos, fetchData, setTodos, loading, error, onDataFilter } =
    useFetchTasks();

  const onTaskAdd = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsAdding(true);
    try {
      const taskCollRref = collection(db, "todos");
      addDoc(taskCollRref, {
        title: newTask,
        status: "active",
      });
      setNewTask("");
      fetchData();
    } catch (error) {
      console.log(error, currentUser);
    } finally {
      setIsAdding(false);
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = async () => {
    setIsDeleting(true);
    try {
      const docRef = doc(db, "todos", selectedTask);
      await deleteDoc(docRef);
      setSelectedTask(null);
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const onTaskStatusChange = async (s: string, id: string) => {
    if (id === "") return;
    setIsUpdating(true);
    try {
      const docRef = doc(db, "todos", id);
      await updateDoc(docRef, { status: s });
      setSelectedTask(null);
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdating(false);
    }
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
                  content={
                    <Button icon={<LoginOutlined />} onClick={logout}>
                      logout
                    </Button>
                  }
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
                <Radio.Group
                  value={status}
                  onChange={(e: any) => {
                    setStatus(e?.target?.value);
                    onDataFilter(e?.target?.value);
                  }}
                >
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
                  loading={isAdding}
                >
                  Add
                </Button>
              </FormContaner>
              <ListContainer>
                {todos?.map((todo: any) => (
                  <List key={todo?.id}>
                    <Content>
                      <Checkbox
                        checked={todo?.data?.status === "completed"}
                        disabled={isUpdating || isDeleting}
                        onChange={(e: any) => {
                          const s =
                            todo?.data?.status === "completed"
                              ? "active"
                              : "completed";
                          onTaskStatusChange(s, todo?.id);
                        }}
                      />
                      <Typography.Text
                        strong
                        delete={todo?.data?.status === "completed"}
                      >
                        {todo?.data?.title}
                      </Typography.Text>
                    </Content>
                    <Actions>
                      {/* <Button
                        icon={<EditFilled size={5} />}
                        type="ghost"
                        size="small"
                      /> */}
                      <Button
                        icon={<DeleteFilled size={5} />}
                        type="ghost"
                        size="small"
                        danger
                        onClick={() => {
                          setSelectedTask(todo?.id);
                          showModal();
                        }}
                        disabled={isDeleting || isUpdating}
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
        confirmLoading={isDeleting}
      >
        <Typography.Text strong>Are you sure??</Typography.Text>
      </Modal>
    </>
  );
}
export default withProtected(Home);
