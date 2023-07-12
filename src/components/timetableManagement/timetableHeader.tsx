import styled from "styled-components";
import Dropdown from "../common/dropDown";
import {
  PlanDropDownItem,
  StateDropDownItem,
} from "../../constant/timetableManagement";
import theme from "../../utils/theme/theme";
import { useState } from "react";
import DefaultModal from "../common/modal";
import { ChangeIcon } from "../../assets/icons";

type Props = {
  plan: string;
  setPlan: React.Dispatch<React.SetStateAction<string>>;
  stated: string;
  setStated: React.Dispatch<React.SetStateAction<string>>;
};

const TimetableHeader = ({ plan, setPlan, stated, setStated }: Props) => {
  const [isCheckAcceptModal, setIsCheckAcceptModal] = useState<boolean>(false);
  const [isCheckRefuseModal, setIsCheckRefuseModal] = useState<boolean>(false);
  const [isRefuseNextModal, setIsRefuseNextModal] = useState<boolean>(false);

  const handleDropdownPlan = (option: string) => {
    setPlan(option);
  };

  const handleDropdownStat = (option: string) => {
    setStated(option);
  };

  function openCheckAcceptModal() {
    setIsCheckAcceptModal(true);
  }

  function openCheckRefuseModal() {
    setIsCheckRefuseModal(true);
  }

  function closeCheckAcceptModal() {
    setIsCheckAcceptModal(false);
  }

  function closeCheckRefuseModal() {
    setIsCheckRefuseModal(false);
  }

  function closeRefuseNextModal() {
    setIsRefuseNextModal(false);
  }

  function handleCancel() {
    closeCheckAcceptModal();
    closeCheckRefuseModal();
    closeRefuseNextModal();
  }

  function handleNext() {
    setIsCheckRefuseModal(false);
    setIsRefuseNextModal(true);
  }

  return (
    <>
      <Header>
        <p>{plan === "결보강" ? "결 보강" : "수업교체"} 관리</p>
        <StateText state={stated}>
          {stated === "요청중" ? "요청중" : stated === "수락" ? "수락" : "거절"}
        </StateText>
        <DropContainer>
          <Dropdown
            options={PlanDropDownItem}
            width={146}
            onClick={handleDropdownPlan}
          />
          <Dropdown
            options={StateDropDownItem}
            width={146}
            onClick={handleDropdownStat}
          />
        </DropContainer>
        <ButtonContainer>
          <TimetableButton>요청 받은 시간표</TimetableButton>
          <TimetableButton>요청한 시간표</TimetableButton>
          {stated === "요청중" && (
            <RequestButton onClick={openCheckAcceptModal}>
              요청 수락
            </RequestButton>
          )}
          {isCheckAcceptModal && (
            <DefaultModal
              open={isCheckAcceptModal}
              close={closeCheckAcceptModal}
              height={373}
            >
              <MainText>
                선택한 {plan === "결보강" ? "보강" : "교체"} 요청을
                수락하시겠습니까?
              </MainText>
              <SubText>다시 한번 수락할 요청인지 확인해주세요.</SubText>
              <ButtonWrapper>
                <Button onClick={handleCancel}>취소</Button>
                <Button>완료</Button>
              </ButtonWrapper>
            </DefaultModal>
          )}
          <RequestButton onClick={openCheckRefuseModal}>
            {stated === "요청중"
              ? "요청 거절"
              : stated === "수락"
              ? "수락 취소"
              : "거절 취소"}
          </RequestButton>
          {isCheckRefuseModal && (
            <DefaultModal
              open={isCheckRefuseModal}
              close={closeCheckRefuseModal}
              height={373}
            >
              <MainText>
                선택한{" "}
                {stated === "요청중"
                  ? ""
                  : stated === "수락"
                  ? "수락된 "
                  : "거절된 "}
                {plan === "결보강" ? "보강" : "교체"} 요청을{" "}
                {stated === "요청중" ? "거절" : "취소"}하시겠습니까?
              </MainText>
              <SubText>
                다시 한번 {stated === "요청중" ? "거절" : "취소"}할 요청인지
                확인해주세요.
              </SubText>
              <ButtonWrapper>
                <Button onClick={handleCancel}>취소</Button>
                {stated === "거절" ? (
                  <Button onClick={handleNext}>완료</Button>
                ) : (
                  <Button>완료</Button>
                )}
              </ButtonWrapper>
            </DefaultModal>
          )}
          {isRefuseNextModal && (
            <DefaultModal
              open={isRefuseNextModal}
              close={closeRefuseNextModal}
              height={590}
            >
              <TitleText>
                {plan === "결보강" ? "결 보강" : "수업교체"}
                <p style={{ color: "#E84045" }}>거절</p>
              </TitleText>
              <ListBox>
                5-13(월) 2교시 영어 권하은
                <img src={ChangeIcon} alt="" />
                5-18(화) 7교시 한국사 김한비
              </ListBox>
              <Input placeholder="거절 사유를 입력해주세요." />
              <ButtonWrapper>
                <Button onClick={handleCancel}>취소</Button>
                <Button>완료</Button>
              </ButtonWrapper>
            </DefaultModal>
          )}
        </ButtonContainer>
      </Header>
    </>
  );
};

const Header = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  > p {
    font: ${({ theme }) => theme.font.SemiBold32};
    height: 35px;
    color: ${({ theme }) => theme.colors.Gray900};
  }
`;

const StateText = styled.div<{ state: string }>`
  font: ${({ theme }) => theme.font.SemiBold24};
  color: ${(props) =>
    props.state === "요청중"
      ? theme.colors.Main
      : props.state === "수락"
      ? theme.colors.Green100
      : theme.colors.Red};
  width: 63px;
  height: 30px;
  margin-top: 10px;
  margin-left: 15px;
`;

const DropContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-left: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 45px;
  width: 656px;
  margin-left: auto;
`;

const TimetableButton = styled.button`
  width: 153px;
  height: 48px;
  left: 1099px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${({ theme }) => theme.font.SemiBold16};
  color: ${({ theme }) => theme.colors.Gray900};
  border: none;
  background-color: ${({ theme }) => theme.colors.Gray200};
  :hover {
    background-color: ${({ theme }) => theme.colors.Gray100};
  }
  :focus {
    border: 2px solid ${({ theme }) => theme.colors.Gray400};
  }
`;
const RequestButton = styled.button`
  width: 107px;
  height: 48px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.White};
  background-color: ${({ theme }) => theme.colors.Main};
  font: ${({ theme }) => theme.font.SemiBold16};
  border: none;
  :hover {
    background-color: ${({ theme }) => theme.colors.Main800};
  }
`;

const MainText = styled.div`
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 40px;
  font: ${({ theme }) => theme.font.SemiBold32};
  color: ${({ theme }) => theme.colors.Black};
`;

const SubText = styled.div`
  justify-content: center;
  white-space: pre-wrap;
  padding: 0 125px;
  margin-bottom: 76px;
  text-align: center;
  font: ${({ theme }) => theme.font.Regular24};
  color: ${({ theme }) => theme.colors.Gray700};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 75px;
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
    background-color: ${({ theme }) => theme.colors.Main800};
  }
`;

const TitleText = styled.div`
  color: ${({ theme }) => theme.colors.Black};
  font: ${({ theme }) => theme.font.SemiBold32};
  margin-bottom: 20px;
  gap: 8px;
`;

const ListBox = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.Gray300};
  background-color: ${({ theme }) => theme.colors.White};
  height: 70px;
  align-items: center;
  padding: 20px 74px 20px;
  gap: 20px;
`;

const Input = styled.textarea`
  width: 657px;
  height: 303px;
  border: none;
  outline: none;
  border-radius: 16px;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.Gray100};
  color: ${({ theme }) => theme.colors.Black};
  font: ${({ theme }) => theme.font.Regular24};
  margin-top: 20px;
  resize: none;
  :focus {
    outline: none;
    color: ${({ theme }) => theme.colors.Gray800};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.Gray400};
    position: absolute;
    width: 288px;
    height: 30px;
    left: 30px;
    top: 20px;
  }
`;

export default TimetableHeader;
