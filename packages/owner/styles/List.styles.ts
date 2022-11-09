import styled from "styled-components";
const whiteSmoke = "#f4f6f7";
export const ListMainContainer = styled.main`
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
  width: 70%;
  min-height: auto;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  min-height: 100px;
  /* padding: 3rem; */
  display: flex;
  gap: 0.5rem;
`;
export const Sidebar = styled.div`
  /* background: red; */
  border-right: 2px solid ${whiteSmoke};

  & .user_info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 2px solid ${whiteSmoke};
    padding: 0.8rem;
  }
  .user_name_email {
    strong {
      text-transform: capitalize;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .email {
      font-size: small;
    }
  }
  & .filter-container {
    margin-top: 1rem;
    padding: 0.8rem;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 2rem;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const List = styled.li`
  background: ${whiteSmoke};
  padding: 0.8rem;
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
