import styled from "styled-components";
import { theme } from "../../style/globalStyle";
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
  border: 1px solid ${theme.Gray300};
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  padding: 0 47px;
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    width: 125px;
    display: flex;
    color:${theme.Gray800};
  }
  :hover{
    border-color: ${theme.Main};
  }
`;
export default PerformanceList;