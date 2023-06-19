import styled from "styled-components";
import { PlanWListProps } from "../models/List";

const PlanWritingList = ({
  date,
  reason,
  request_teacher,
  middle_teacher,
}: PlanWListProps) => {
  return (
    <>
      <PlanWListBox>
        <p>{date}</p>
        <p>{reason}</p>
        <p>{request_teacher}</p>
        <p>{middle_teacher}</p>
      </PlanWListBox>
    </>
  );
};

const PlanWListBox = styled.div`
  height: 92px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.Gray300};
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 47px;
  p {
    font: ${({ theme }) => theme.font.Regular24};
    width: 125px;
    color: ${({ theme }) => theme.colors.Gray800};
  }
  :hover {
    border-color: ${({ theme }) => theme.colors.Main};
  }
`;

export default PlanWritingList;