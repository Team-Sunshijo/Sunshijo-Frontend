import styled from "styled-components";
import { PlanList } from "../contance/planList";
import PlanWritingList from "./planWritingList";

const PlanWriting = () => {
  return (
    <Container>
      <Header>
        <p>계획서 작성</p>
        <div>
          <ModifyButton>계획서 수정</ModifyButton>
          <AddButton>계획서 추가</AddButton>
        </div>
      </Header>
      <TitleList>
        <p>날짜(요일)</p>
        <p>사유</p>
        <p>요청교사</p>
        <p>부담임</p>
      </TitleList>
      {PlanList.map((item) => (
        <PlanWritingList
          date={item.date}
          reason={item.reason}
          request_teacher={item.request_teacher}
          middle_teacher={item.middle_teacher}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 70px 165px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font: ${({ theme }) => theme.font.SemiBold32};
    line-height: 30px;
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
  margin-left:45px;
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

const TitleList = styled.div`
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
  };
`;

export default PlanWriting;
