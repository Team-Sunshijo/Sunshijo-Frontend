import styled from "styled-components";
import Dropdown from "../common/dropDown";
import { PlanDropDownItem,StateDropDownItem } from "../../constant/timetableManagement";

const TimetableHeader = () => {
  return (
    <>
      <Header>
        <p>결 보강 관리 </p>
        <StateText>요청중</StateText>
        <DropContainer>
          <Dropdown options={PlanDropDownItem} width={146} />
          <Dropdown options={StateDropDownItem} width={146} />
        </DropContainer>
        <ButtonContainer>
          <TimetableButton>요청 받은 시간표</TimetableButton>
          <TimetableButton>요청한 시간표</TimetableButton>
          <RequestButton>요청 수락</RequestButton>
          <RequestButton>요청 거절</RequestButton>
        </ButtonContainer>
      </Header>
    </>
  );
};

const Header = styled.div`
  display: flex;
  > p {
    font: ${({ theme }) => theme.font.SemiBold32};
    width: 174px;
    height: 30px;
    margin-top: 151px;
    color: ${({ theme }) => theme.colors.Gray900};
  }
`;

const StateText = styled.div`
  font: ${({ theme }) => theme.font.SemiBold24};
  color: ${({ theme }) => theme.colors.Main};
  width: 63px;
  height: 30px;
  margin-top: 157px;
`;

const DropContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 146px;
  margin-left: 38px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 45px;
  margin-top: 143px;
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
export default TimetableHeader;
