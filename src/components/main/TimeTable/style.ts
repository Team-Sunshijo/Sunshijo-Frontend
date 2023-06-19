import styled from "styled-components";

export const ExplainText = styled.div`
  font: ${({ theme }) => theme.font.Regular14};
  margin-bottom: 8px;
  img {
    width: 12px;
    height: 12px;
    margin-right: 8px;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 580px;
  overflow: hidden;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05),
    0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  table {
    border-collapse: collapse;
  }
  tr {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: left;
    text-align: center;
    margin: auto 0;
  }
  th,
  td {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 108.3px;
    height: 75px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.Gray300};
    font: ${({ theme }) => theme.font.Regular24};
  }
  p {
    font: ${({ theme }) => theme.font.Medium12};
  }
`;

export const Day = styled.div`
  width: 650px;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.Main};
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05),
    0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  border-radius: 20px 20px 0px 0px;
  padding-left: 106px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    font: ${({ theme }) => theme.font.Regular24};
  }
`;
