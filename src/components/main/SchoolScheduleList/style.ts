import styled from "styled-components";

export const SchoolScheduleWrapper = styled.div`
  width: 400px;
  height: 250px;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05),
    0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
  padding: 15px 0;
`;

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
  gap: 15px 0;
  padding: 0 10px;
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
