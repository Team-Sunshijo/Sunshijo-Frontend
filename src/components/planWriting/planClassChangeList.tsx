import styled from "styled-components";
import { ClassChangeListProps } from "../models/List";

const PlanClassChangeList = ({
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
            <p>{date}</p>
            <p>{lesson}</p>
            <p>{grade_class}</p>
            <p>{subject_replace}</p>
          </ChangeBefore>
          <ChangeAfter>
            <p>{change_date}</p>
            <p>{change_lesson}</p>
            <p>{change_grade_class}</p>
            <p>{replace_subject}</p>
          </ChangeAfter>
        </PlanClassChangeListBox>
        <PlanClassChangeTeacherBox>
          <p>{charge_teacher}</p>
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
  p {
    font: ${({ theme }) => theme.font.Regular24};
    color: ${({ theme }) => theme.colors.Gray800};
    width: 150px;
    display: flex;
  }
  :hover {
    border-color: ${({ theme }) => theme.colors.Main};
  }
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
  p {
    font: ${({ theme }) => theme.font.SemiBold24};
  }
`;

const PlanClassChangeTeacherBox = styled.div`
  padding: 75px 25px;
  width: 200px;
  height: 180px;
  border-radius: 0 8px 8px 0;
  border: 1px solid ${({ theme }) => theme.colors.Gray300};
  p {
    font: ${({ theme }) => theme.font.SemiBold24};
    color: ${({ theme }) => theme.colors.Gray800};
  }
  :hover {
    border-color: ${({ theme }) => theme.colors.Main};
  }
`;

export default PlanClassChangeList;
