import styled from "styled-components";
import PlanDetailClassChange from "./planDetailClassChange";
import PlanDetailReinforcement from "./planDetailReinforcement";
import { useState } from "react";
import DefaultModal from "../common/modal";
import Calendar from "../common/calender";
import { ModalTextList } from "../contance/modalList";

const PlanWritingDetailList = () => {
  const [isCheckRequestModal, setIsCheckRequestModal] = useState<boolean>(false);
  const [isCheckPrintModal, setIsCheckPrintModal] = useState<boolean>(false);

  function openCheckRequestModal() {
    setIsCheckRequestModal(true);
  }

  function openCheckPrintModal() {
    setIsCheckPrintModal(true);
  }

  function closeCheckRequestModal() {
    setIsCheckRequestModal(false);
  }

  function closeCheckPrintModal() {
    setIsCheckPrintModal(false);
  }

  function handleCancel() {
    closeCheckRequestModal();
    closeCheckPrintModal();
  }

  return (
    <Container>
      <MainListHeader>
        <TitleText>날짜</TitleText>
        <TitleText>사유</TitleText>
        <TitleText>요청교사</TitleText>
      </MainListHeader>
      <MainList>
        <Calendar />
        <Input type="text" placeholder="사유 입력" />
        <Input type="text" placeholder="요청교사 입력" />
      </MainList>
      <PlanDetailReinforcement />
      <PlanDetailClassChange />
      <Bottom>
        <BottomButton>이전 페이지</BottomButton>
        <div>
          <BottomButton style={{ width: "152px" }} onClick={openCheckRequestModal}>
            시간표 요청하기
          </BottomButton>
          {isCheckRequestModal && <DefaultModal open={isCheckRequestModal} close={closeCheckRequestModal} height={373}>
          <MainText>{ModalTextList.requestText.main_text}</MainText>
          <SubText>{ModalTextList.requestText.sub_text}</SubText>
          <ButtonWrapper>
            <Button onClick={handleCancel}>취소</Button>
            <Button>요청</Button>
          </ButtonWrapper>
          </DefaultModal>}
          <BottomButton onClick={openCheckPrintModal}>
            PDF 출력
          </BottomButton>
          {isCheckPrintModal && <DefaultModal open={isCheckPrintModal} close={closeCheckPrintModal} height={373}>
            <MainText>{ModalTextList.printText.main_text}</MainText>
            <SubText>{ModalTextList.printText.sub_text}</SubText>
            <ButtonWrapper>
              <Button onClick={handleCancel}>취소</Button>
              <Button>출력</Button>
            </ButtonWrapper>
          </DefaultModal> }
        </div>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  padding: 81px 165px;
  width: 100%;
`;

const TitleText = styled.div`
  font: ${({ theme }) => theme.font.SemiBold24};
  color: ${({ theme }) => theme.colors.Gray900};
  line-height: 30px;
  width: 130px;
`;

const MainText = styled.div`
  justify-content: center;
  margin-top: 40px;
  font: ${({ theme }) => theme.font.SemiBold32};
  color: ${({ theme }) => theme.colors.Black};
`;

const SubText = styled.div`
  justify-content: center;
  white-space: pre-wrap;
  padding: 0 125px;
  text-align: center;
  font: ${({ theme }) => theme.font.Regular24};
  color: ${({ theme }) => theme.colors.Gray700};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 75px;
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
  align-items: center;
  height: 74px;
  padding: 22px 146px;
  background-color: ${({ theme }) => theme.colors.White};
  border: 1px solid ${({ theme }) => theme.colors.Main};
  border-radius: 0px 0px 8px 8px;
`;

const Input = styled.input`
  font: ${({ theme }) => theme.font.Regular24};
  justify-content: center;
  height: 24px;
  border: 0;
  outline: none;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    gap: 45px;
  }
`;

const BottomButton = styled.button`
  justify-content: center;
  padding: 11px 24px;
  width: 122px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.Main};
  border: none;
  border-radius: 8px;
  margin-top: 25px;

  font: ${({ theme }) => theme.font.SemiBold16};
  line-height: 160%;
  color: ${({ theme }) => theme.colors.White};
  :hover {
    background-color: ${({ theme }) => theme.colors.Main800};
  }
`;

const Button = styled.button`
  margin-top: 32px;
  width: 109px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.Main};
  border-radius: 8px;
  border: none;
  gap: 20px;
  color: ${({ theme }) => theme.colors.White};
  font: ${({ theme }) => theme.font.SemiBold16};
  :hover {
    background-color: ${({ theme }) => theme.colors.Main800}
  }
`;

export default PlanWritingDetailList;
