import styled from "styled-components";
import theme from "../../utils/theme/theme";
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 0 47px;
  height: 84px;
  border: 1px solid ${theme.colors.Gray300};
  border-radius: 8px;
  min-width: 500px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;

    width: 141px;
    height: 30px;
    left: 916px;
    top: 27px;
  }
  :hover {
    border-color: ${theme.colors.Main};
  }
`;

export default PlanWritingList;