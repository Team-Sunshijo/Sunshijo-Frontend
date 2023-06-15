import styled from "styled-components";
import DetailClassChangeList from "./detailClassChangeList";
import DetailReinforcementList from "./detailReinforcementList";

const PlanWritingDetail = () => {
  return (
    <Container>
      <MainListHeader>
        <p>날짜</p>
        <p>사유</p>
        <p>요청교사</p>
      </MainListHeader>
      <MainList>
        <input type="text" placeholder="날짜 입력" />
        <input type="text" placeholder="사유 입력" />
        <input type="text" placeholder="요청교사 입력" />
      </MainList>
      <DetailReinforcementList />
      <DetailClassChangeList />
    </Container>
  );
};

const Container = styled.div`
  padding: 35px 165px;
  width: 100%;
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
  p {
    font: ${({ theme }) => theme.font.SemiBold24};
    line-height: 30px;
    width: 130px;
  }
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

export default PlanWritingDetail;
