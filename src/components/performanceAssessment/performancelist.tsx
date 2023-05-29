import styled from "styled-components";
import { ListProps } from "../models/List";

const PerformanceList = ({
  date,
  grade_class,
  teacher,
  subject,
}: ListProps) => {
  return (
    <>
      <ListBox>
        <p>{date}</p>
        <p>{grade_class}</p>
        <p>{subject}</p>
        <p>{teacher}</p>
      </ListBox>
    </>
  );
};

const ListBox = styled.div`
align-items: center;
  height: 92px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.Gray300};
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  padding: 0 47px;
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font: ${({ theme }) => theme.font.Regular24};
    width: 125px;
    display: flex;
    color: ${({ theme }) => theme.colors.Gray800};
  }
  :hover{
    border-color: ${({ theme }) => theme.colors.Main};
  }
  `
export default PerformanceList;

