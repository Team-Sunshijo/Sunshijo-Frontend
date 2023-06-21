import styled from "styled-components";
import { List } from "../contance";
import PerformanceList from "./performancelist";
import {useState } from "react";
import Dropdown from "../common/dropDown";
import { gradeDropDownItem, classDropDownItem } from "../../constant/performance";
import Calendar from "../common/calender";
import DefaultModal from "../common/modal";
const Performance = () => {
  const [isModal, setIsModal] = useState<boolean>(false);

  function openModal() {
    setIsModal(true);
  }

  function closeModal() {
    setIsModal(false);
  }

  return (
    <Container>
      <Header>
        <p>수행평가 등록</p>
        <Button onClick={openModal}>수행평가 등록</Button>
        {isModal && <DefaultModal open={isModal} close={closeModal}  >
        <p>수행평가 등록</p>
        <Calendar/>
        <DropContainer>
          <Dropdown options={gradeDropDownItem} width={113} />
          <Dropdown options={classDropDownItem} width={113} />
        </DropContainer>
        <PerformanceInput placeholder="수행평가 내용을 입력해주세요." />
        </DefaultModal> }
      </Header>
      <TitleRow>
        <p>날짜(요일)</p>
        <p>학년-반</p>
        <p>과목</p>
        <p>담당교사</p>
      </TitleRow>
      {List.map((item) => (
        <PerformanceList
          date={item.date}
          grade_class={item.grade_class}
          teacher={item.teacher}
          subject={item.subject}
        />
      ))}
    </Container>
  );
};

const PerformanceInput = styled.textarea`
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.Main};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.Gray200};
    border-radius: 10px;
    border-radius: 8px;
    box-shadow: inset 0px 0px 5px white;
  }
  margin-top: 30px;
  padding: 20px 30px;
  border-radius: 16px;
  width: 656px;
  height: 260px;
  background-color: ${({ theme }) => theme.colors.Gray100};
  color: ${({ theme }) => theme.colors.Black};
  border: none;
  font: ${({ theme }) => theme.font.Regular24};
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
const DropContainer=styled.div`
  display: flex;
  gap: 30px;
 margin-top: 25px;
 margin-right: auto;
`
const Container = styled.div`
  padding: 0 165px;
`;
const Header = styled.div`
  >p {
    font: ${({ theme }) => theme.font.SemiBold32};
    width: 174px;
    height: 30px;
    color: ${({ theme }) => theme.colors.Gray900};
    margin-top: 151px;
  }
  justify-content: space-between;
  display: flex;
`;
const Button = styled.button`
  width: 136px;
  height: 48px;
  left: 1619px;
  padding: 11px 24px;
  border: none;
  background-color:${({ theme }) => theme.colors.Main};
  border-radius: 8px;
  font: ${({ theme }) => theme.font.SemiBold16};
  color: ${({ theme }) => theme.colors.White};
  margin-top: 143px;
  :hover {
    background-color: ${({ theme }) => theme.colors.Main800};
  }
`;
const TitleRow = styled.div`
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

export default Performance;
