import styled from "styled-components";
import { PlanListProps } from "../models/planListProps";

const PlanWritingList = ({
  date,
  reason,
  request_teacher,
  middle_teacher,
}: PlanListProps) => {
  return (
    <>
      <PlanListBox>
        <p>{date}</p>
        <p>{reason}</p>
        <p>{request_teacher}</p>
        <p>{middle_teacher}</p>
      </PlanListBox>
    </>
  );
};

const PlanListBox = styled.div`
  align-items: center;
  height: 92px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.Gray300};
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  padding: 0 47px;
  p {
    font: ${({ theme }) => theme.font.Regular24};
    width: 125px;
    display: flex;
    color: ${({ theme }) => theme.colors.Gray800};
  }
  :hover {
    border-color: ${({ theme }) => theme.colors.Main};
  }
`;

export default PlanWritingList;