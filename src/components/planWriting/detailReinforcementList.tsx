import styled from "styled-components";
import { ReinforcementList } from "../contance/index";
import PlanReinforcementList from "./planReinforcementList";

const DetailReinforcementList = () => {
  return(
    <>
      <ListHeader>
        <p>결 보강 계획서</p>
        <div>
          <ModifyButton>계획서 수정</ModifyButton>
          <AddButton>계획서 추가</AddButton>
        </div>
      </ListHeader>
      <ReinforcementTitleList>
        <p>날짜(요일)</p>
        <p>교시</p>
        <p>학년-반</p>
        <p>결강 과목</p>
        <p>보강 계획</p>
        <p>보강교사</p>
      </ReinforcementTitleList>
      {ReinforcementList.map((item) => (
        <PlanReinforcementList
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
  p {
    font: ${({ theme }) => theme.font.SemiBold32};
    width: 210px;
  }
  div {
    display: flex;
    margin-bottom: 15px;
    gap: 45px;
  }
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
  p {
    font: ${({ theme }) => theme.font.SemiBold24};
    width: 125px;
  }
`;

export default DetailReinforcementList;