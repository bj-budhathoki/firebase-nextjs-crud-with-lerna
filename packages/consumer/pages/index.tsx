import type { NextPage } from "next";

import { Checkbox, Typography } from "antd";

import {
  MainContainer,
  Wrapper,
  Sidebar,
  ContentContainer,
  ListContainer,
  List,
  Content,
  useFetchTasks,
  FilterByStatus,
  // @ts-ignore
} from "@project/shared/";

const Home: NextPage = () => {
  const { todos, onDataFilter } = useFetchTasks();
  return (
    <MainContainer>
      <Wrapper>
        <Sidebar>
          <div className="filter-container">
            <FilterByStatus onDataFilter={onDataFilter} />
          </div>
        </Sidebar>
        <ContentContainer>
          <Typography.Title>Todos</Typography.Title>
          <ListContainer>
            {todos?.map((todo: any) => (
              <List key={todo?.id}>
                <Content>
                  <Checkbox
                    checked={todo?.data?.status === "completed"}
                    disabled={true}
                  />
                  <Typography.Text
                    strong
                    delete={todo?.data?.status === "completed"}
                  >
                    {todo?.data?.title}
                  </Typography.Text>
                </Content>
              </List>
            ))}
          </ListContainer>
        </ContentContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default Home;
