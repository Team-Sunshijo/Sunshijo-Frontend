import styled from "styled-components";

export const ClassChangeBox = styled.div`
  padding: 0 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 5%;
    background-color: ${({ theme }) => theme.colors.Main};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.Gray300};
    border-radius: 10px;
    margin-top: 12px;
  }
`;

export const ClassChange = styled.div`
  width: 350px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.Gray300};
  border-radius: 8px;
  margin-top: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Class = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font: ${({ theme }) => theme.font.SemiBold16};
  div {
    font: ${({ theme }) => theme.font.Regular12};
  }
`;

export const TitleText = styled.div`
  font: ${({ theme }) => theme.font.SemiBold20};
  display: flex;
  align-items: center;
  img {
    height: 20px;
    padding: 0 10px;
    cursor: pointer;
  }
`;
