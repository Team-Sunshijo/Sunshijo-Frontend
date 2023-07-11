import styled from "styled-components";
import { ClassChangeListProps } from "../models/List";

const DetailClassChangeList = ({
  date,
  lesson,
  grade_class,
  subject_replace,
  change_date,
  change_lesson,
  change_grade_class,
  replace_subject,
  charge_teacher,
}: ClassChangeListProps) => {
  return (
    <>
      <ClassChangeList>
        <PlanClassChangeListBox>
          <ChangeBefore>
            <MainBeforeText>{date}</MainBeforeText>
            <MainBeforeText>{lesson}</MainBeforeText>
            <MainBeforeText>{grade_class}</MainBeforeText>
            <MainBeforeText>{subject_replace}</MainBeforeText>
          </ChangeBefore>
          <ChangeAfter>
            <MainAfterText>{change_date}</MainAfterText>
            <MainAfterText>{change_lesson}</MainAfterText>
            <MainAfterText>{change_grade_class}</MainAfterText>
            <MainAfterText>{replace_subject}</MainAfterText>
          </ChangeAfter>
        </PlanClassChangeListBox>
        <PlanClassChangeTeacherBox>
          <MainTeacherText>{charge_teacher}</MainTeacherText>
        </PlanClassChangeTeacherBox>
      </ClassChangeList>
    </>
  );
};

const ClassChangeList = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
`;

const PlanClassChangeListBox = styled.div`
  width: 85%;
  height: 180px;
  border-radius: 8px 0 0 8px;
  border: 1px solid ${({ theme }) => theme.colors.Gray300};
  padding: 0 54px;
  :hover {
    border-color: ${({ theme }) => theme.colors.Main};
  }
`;

const MainBeforeText = styled.div`
  font: ${({ theme }) => theme.font.Regular24};
  color: ${({ theme }) => theme.colors.Gray800};
  width: 200px;
  display: flex;
`;

const MainAfterText = styled.div`
  font: ${({ theme }) => theme.font.SemiBold24};
  color: ${({ theme }) => theme.colors.Gray800};
  width: 200px;
  display: flex;
`;

const ChangeBefore = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const ChangeAfter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const PlanClassChangeTeacherBox = styled.div`
  padding: 75px 0;
  width: 200px;
  height: 180px;
  border-radius: 0 8px 8px 0;
  border: 1px solid ${({ theme }) => theme.colors.Gray300};
  :hover {
    border-color: ${({ theme }) => theme.colors.Main};
  }
`;

const MainTeacherText = styled.div`
  font: ${({ theme }) => theme.font.SemiBold24};
  color: ${({ theme }) => theme.colors.Gray800};
  margin-left: 40px;
`;

export default DetailClassChangeList;