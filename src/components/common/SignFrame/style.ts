import styled from "styled-components";

export const Container = styled.div`
  width: 509px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 16px;
  border: solid 1px ${({ theme }) => theme.colors.Main};
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25));
`;

export const IconArea = styled.div`
  width: 218px;
  background-color: ${({ theme }) => theme.colors.Main};
  border-radius: 16px 0 0 16px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
