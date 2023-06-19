import styled from "styled-components";
import PlanDetailClassChange from "./planDetailClassChange";
import PlanDetailReinforcement from "./planDetailReinforcement";

const PlanWritingDetailList = () => {
  return(
    <Container>
      <MainListHeader>
        <TitleText>날짜</TitleText>
        <TitleText>사유</TitleText>
        <TitleText>요청교사</TitleText>
      </MainListHeader>
      <MainList>
        <input type="text" placeholder="날짜 입력" />
        <input type="text" placeholder="사유 입력" />
        <input type="text" placeholder="요청교사 입력" />
      </MainList>
      <PlanDetailReinforcement />
      <PlanDetailClassChange />
    </Container>
  );
};

const Container = styled.div`
  padding: 35px 165px;
  width: 100%;
`;

const TitleText = styled.div`
  font: ${({ theme }) => theme.font.SemiBold24};
  color: ${({ theme }) => theme.colors.Gray900};
  line-height: 30px;
  width: 130px;
`;

const MainListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 146px;
  height: 46px;
  left: 165px;
  top: 116px;
  background-color: ${({ theme }) => theme.colors.Main};
  border-radius: 8px 8px 0px 0px;
`;

const MainList = styled.div`
  display: flex;
  justify-content: space-between;
  height: 74px;
  padding: 22px 146px;
  background-color: ${({ theme }) => theme.colors.White};
  border: 1px solid ${({ theme }) => theme.colors.Main};
  border-radius: 0px 0px 8px 8px;
  input {
    font: ${({ theme }) => theme.font.Regular24};
    justify-content: center;
    height: 24px;
    border: 0;
    outline: none;
    width: 130px;
  }
`;

export default PlanWritingDetailList;