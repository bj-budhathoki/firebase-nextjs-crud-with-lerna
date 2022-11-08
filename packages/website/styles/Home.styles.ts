import styled from "styled-components";
export const Main = styled.main`
  background: radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%),
    linear-gradient(121.28deg, #669600 0%, #ff0000 100%),
    linear-gradient(360deg, #0029ff 0%, #8fff00 100%),
    radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%),
    radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%);
  background-blend-mode: screen, color-dodge, overlay, difference, normal;
  padding: 40px 0;
  min-height: 100vh;
`;
export const Wrapper = styled.div`
  width: 50%;
  min-height: auto;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  min-height: 100px;
  padding: 3rem;
`;
export const FormContaner = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const List = styled.li`
  background: #f4f6f7;
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
`;
export const Content = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;
