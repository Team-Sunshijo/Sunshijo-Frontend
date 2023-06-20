import styled from "styled-components";

export const TitleText = styled.div`
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.font.SemiBold20};
  img {
    height: 20px;
    padding: 0 10px;
    cursor: pointer;
  }
`;

export const ScheduleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 15px 0;
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
  }
`;

export const SchoolSchedule = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const Date = styled.div`
  width: 60px;
  height: 55px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.Main};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font: ${({ theme }) => theme.font.SemiBold18};
  div {
    font: ${({ theme }) => theme.font.SemiBold16};
  }
`;

export const Event = styled.div`
  font: ${({ theme }) => theme.font.Regular16};
  border-bottom: 1px solid ${({ theme }) => theme.colors.Gray300};
  width: 70%;
  display: flex;
  align-items: center;
`;
