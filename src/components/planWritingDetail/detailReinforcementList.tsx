import styled from "styled-components";
import { ReinforcementListProps } from "../models/List";

const DetailReinforcementList = ({
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
        <MainText>{date}</MainText>
        <MainText>{lesson}</MainText>
        <MainText>{grade_class}</MainText>
        <MainText>{missing_subjects}</MainText>
        <MainText>{reinforcement_plan}</MainText>
        <MainText>{reinforcement_teacher}</MainText>
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
  :hover{
    border-color: ${({ theme }) => theme.colors.Main};
  }
`;

const MainText = styled.div`
  font: ${({ theme }) => theme.font.Regular24};
  color:${({ theme }) => theme.colors.Gray800};
  width: 125px;
  display: flex;
`;

export default DetailReinforcementList;