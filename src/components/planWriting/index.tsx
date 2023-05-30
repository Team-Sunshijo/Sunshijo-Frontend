import styled from "styled-components";
import { PlanList } from "../contance/planList";
import PlanWritingList from "./planWritingList";

const PlanWriting = () => {
  return (
    <Container>
      <Header>
        <p>계획서 작성</p>
          <ModifyButton>계획서 수정</ModifyButton>
          <AddButton>계획서 추가</AddButton>
      </Header>
      <TitleList>
        <p>날짜(요일)</p>
        <p>사유</p>
        <p>요청교사(서명)</p>
        <p>부담임(서명)</p>
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
  min-width: 500px;
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    width: 146px;
    left: 165px;
    top: 151px;
  }
`;



const ModifyButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 11px 24px;
  gap: 20px;

  width: 122px;
  height: 48px;
  background-color: ${theme.colors.Main};
  border: none;
  border-radius: 8px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: ${theme.colors.White};
  :hover {
    background-color: ${theme.colors.Main800};
  }
`;

const AddButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 122px;
  height: 48px;
  top: 143px;
  background-color: ${theme.colors.Main};
  border: none;
  border-radius: 8px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: ${theme.colors.White};
  :hover {
    background-color: ${theme.colors.Main800};
  }
`;

const TitleList = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-top:15px;
  background-color: ${theme.colors.Gray100};
  border-radius: 8px;
  margin-bottom: 25px;
  padding: 20px 47px;
  margin-left:4 0px
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    width: 145px;
  }
`;

export default PlanWriting;
