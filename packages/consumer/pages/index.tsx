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
  NoData,
  // @ts-ignore
} from "@project/shared/";
import Head from "next/head";

const Home: NextPage = () => {
  const { todos, onDataFilter, loading } = useFetchTasks();
  return (
    <MainContainer>
      <Head>
        <title>CRUD App-consumer</title>
        <meta name="description" content="Firebase crud " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Sidebar>
          <div className="filter-container">
            <FilterByStatus onDataFilter={onDataFilter} />
          </div>
        </Sidebar>

        <ContentContainer>
          <Typography.Title>Todos</Typography.Title>
          <ListContainer>
            {!loading && todos?.length <= 0 ? (
              <NoData />
            ) : (
              <>
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
              </>
            )}
          </ListContainer>
        </ContentContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default Home;
