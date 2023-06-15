import styled from "styled-components";
import { ReinforcementListProps } from "../models/List";

const PlanReinforcementList = ({
  date,
  lesson,
  grade_class,
  missing_subjects,
  reinforcement_plan,
  reinforcement_teacher,
}: ReinforcementListProps) => {
  return (
    <>
      <PlanReinforcementListBox>
        <p>{date}</p>
        <p>{lesson}</p>
        <p>{grade_class}</p>
        <p>{missing_subjects}</p>
        <p>{reinforcement_plan}</p>
        <p>{reinforcement_teacher}</p>
      </PlanReinforcementListBox>
    </>
  );
};

const PlanReinforcementListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  border-radius: 8px;
  border: 1px solid${({ theme }) => theme.colors.Gray300};
  margin-top: 25px;
  padding: 0 47px;
  p {
    font: ${({ theme }) => theme.font.Regular24};
    width: 125px;
    display: flex;
    color:${({ theme }) => theme.colors.Gray900};
  }
  :hover{
    border-color: ${({ theme }) => theme.colors.Main};
  }
`;

export default PlanReinforcementList;
