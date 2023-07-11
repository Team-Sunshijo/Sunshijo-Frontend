import styled from "styled-components";
import { TimetableListProps } from "../models/List";
import { useState } from "react";
import theme from "../../utils/theme/theme";
import DefaultModal from "../common/modal";
import { ChangeIcon } from "../../assets/icons";

type Props = TimetableListProps & {
  plan: string;
};

const List = ({
  date,
  grade_class,
  teacher,
  subject,
  reason,
  state,
  plan,
}: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isRefuseReasonModal, setIsRefuseReasonModal] =
    useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  function openRefuseReasonModal() {
    setIsRefuseReasonModal(true);
  }

  function closeRefuseReasonModal() {
    setIsRefuseReasonModal(false);
  }

  function handleCancel() {
    closeRefuseReasonModal();
  }

  return (
    <>
      <ListBox isChecked={isChecked} onClick={openRefuseReasonModal}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <p>{date}</p>
        <p>{grade_class}</p>
        <p>{subject}</p>
        <p>{reason}</p>
        <p>{teacher}</p>
        <StateText state={state}>{state}</StateText>
      </ListBox>
      {isRefuseReasonModal && (
        <DefaultModal
          open={isRefuseReasonModal}
          close={closeRefuseReasonModal}
          height={590}
        >
          <TitleText>
            {plan === "결보강" ? "결 보강" : "수업교체"}
            <p style={{ color: "#E84045" }}>거절</p>
          </TitleText>
          <ChangeListBox>
            5-13(월) 2교시 영어 권하은
            <img src={ChangeIcon} alt="" />
            5-18(화) 7교시 한국사 김한비
          </ChangeListBox>
          <Input placeholder="거절 사유를 입력해주세요." />
          <ButtonWrapper>
            <Button onClick={handleCancel}>취소</Button>
            <Button>완료</Button>
          </ButtonWrapper>
        </DefaultModal>
      )}
    </>
  );
};

const StateText = styled.div<{ state: string }>`
  // color: ${theme.colors.Main};
  color: ${(props) =>
    props.state === "요청중"
      ? theme.colors.Main
      : props.state === "수락"
      ? theme.colors.Green100
      : theme.colors.Red};
  font: ${({ theme }) => theme.font.Regular24};
`;

const ListBox = styled.div<{ isChecked: boolean }>`
  align-items: center;
  height: 92px;
  border-radius: 8px;
  border: 1px solid
    ${({ isChecked }) => (isChecked ? theme.colors.Main : theme.colors.Gray300)};
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  padding: 0 47px;

  p {
    font: ${({ theme }) => theme.font.Regular24};
    color: ${({ theme }) => theme.colors.Gray900};
  }
  :hover {
    border-color: ${({ theme }) => theme.colors.Main};
  }

  input {
    width: 24px;
    height: 24px;
    accent-color: ${({ theme }) => theme.colors.Main};
  }
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

const ChangeListBox = styled.div`
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

export default List;
