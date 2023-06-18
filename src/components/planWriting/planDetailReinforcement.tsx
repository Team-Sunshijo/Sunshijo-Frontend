import styled from "styled-components";
import { ReinforcementList } from "../contance/index";
import DetailReinforcementList from "./detailReinforcementList";

const PlanDetailReinforcement = () => {
  return(
    <>
      <ListHeader>
        <TitleText>결 보강 계획서</TitleText>
        <div>
          <ModifyButton>계획서 수정</ModifyButton>
          <AddButton>계획서 추가</AddButton>
        </div>
      </ListHeader>
      <ReinforcementTitleList>
        <MainText>날짜(요일)</MainText>
        <MainText>교시</MainText>
        <MainText>학년-반</MainText>
        <MainText>결강 과목</MainText>
        <MainText>보강 계획</MainText>
        <MainText>보강교사</MainText>
      </ReinforcementTitleList>
      {ReinforcementList.map((item) => (
        <DetailReinforcementList 
          date={item.date}
          lesson={item.lesson}
          grade_class={item.grade_class}
          missing_subjects={item.missing_subjects}
          reinforcement_plan={item.reinforcement_plan}
          reinforcement_teacher={item.reinforcement_teacher}
        />
      ))}
    </>
  );
};

const ListHeader = styled.div`
  display: flex;
  margin-top: 50px;
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

const ReinforcementTitleList = styled.div`
  display: flex;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.Gray100};
  border-radius: 8px;
  justify-content: space-between;
  padding: 20px 47px;
  margin-top: 15px;
`;

export default PlanDetailReinforcement;