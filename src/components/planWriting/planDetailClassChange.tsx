import styled from "styled-components";
import { ClassChangeList } from "../contance/index";
import DetailClassChangeList from "./detailClassChangeList";

const PlanDetailClassChange = () => {
  return(
    <>
      <ListHeader>
        <TitleText>수업교체 계획서</TitleText>
        <div>
          <ModifyButton>계획서 수정</ModifyButton>
          <AddButton>계획서 추가</AddButton>
        </div>
      </ListHeader>
      <ClassChangeTitleList>
        <MainText>날짜(요일)</MainText>
        <MainText>교시</MainText>
        <MainText>학년-반</MainText>
        <MainText>과목</MainText>
        <MainText>담당교사</MainText>
      </ClassChangeTitleList>
      {ClassChangeList.map((item) => (
        <DetailClassChangeList
          date={item.date}
          lesson={item.lesson}
          grade_class={item.grade_class}
          subject_replace={item.subject_replace}
          change_date={item.change_date}
          change_lesson={item.change_lesson}
          change_grade_class={item.change_grade_class}
          replace_subject={item.replace_subject}
          charge_teacher={item.charge_teacher}
        />
      ))}
    </>
  );
};

const ListHeader = styled.div`
  display: flex;
  margin-top: 90px;
  justify-content: space-between;
  div {
    display: flex;
    margin-bottom: 15px;
    gap: 45px;
  }
`;

const TitleText = styled.div`
  font: ${({ theme }) => theme.font.SemiBold32};
  color: ${({ theme }) => theme.colors.Gray900};
  width: 210px;
`;

const MainText = styled.div`
  font: ${({ theme }) => theme.font.SemiBold24};
  color: ${({ theme }) => theme.colors.Gray800};
  width: 125px;
`;

const ModifyButton = styled.button`
  justify-content: center;
  padding: 11px 24px;
  width: 122px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.Main};
  border: none;
  border-radius: 8px;
  font: ${({ theme }) => theme.font.SemiBold16};
  line-height: 160%;
  color: ${({ theme }) => theme.colors.White};
  :hover {
    background-color: ${({ theme }) => theme.colors.Main800};
  }
`;

const AddButton = styled.button`
  width: 122px;
  height: 48px;
  top: 143px;
  background-color: ${({ theme }) => theme.colors.Main};
  border: none;
  border-radius: 8px;
  font: ${({ theme }) => theme.font.SemiBold16};
  line-height: 160%;
  color: ${({ theme }) => theme.colors.White};
  :hover {
    background-color: ${({ theme }) => theme.colors.Main800};
  }
`;

const ClassChangeTitleList = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.Gray100};
  border-radius: 8px;
  padding: 20px 47px;
  margin-top: 15px;
`;

export default PlanDetailClassChange;