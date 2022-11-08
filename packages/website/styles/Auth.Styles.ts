import styled from "styled-components";

export const LoginContainer = styled.div`
  background: radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%),
    linear-gradient(121.28deg, #669600 0%, #ff0000 100%),
    linear-gradient(360deg, #0029ff 0%, #8fff00 100%),
    radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%),
    radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%);
  background-blend-mode: screen, color-dodge, overlay, difference, normal;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginFormWrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  min-height: 100px;
  padding: 2rem;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
`;
