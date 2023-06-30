import styled from "styled-components";
import { ReinforcementList } from "../contance/index";
import DetailReinforcementList from "./detailReinforcementList";
import { useState } from "react";
import DefaultModal from "../common/modal";
import Dropdown from "../common/dropDown";
import Calendar from "../common/calender";
import { gradeDropDownItem, classDropDownItem,timeDropDownItem, subjectDropDownItem} from "../../constant/dropDownType";

const PlanDetailReinforcement = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedOption, setSelectedOption]=useState("");
  function openAddModal() {
    setIsAddModalOpen(true);
  }

  function closeAddModal() {
    setIsAddModalOpen(false);
  }

  function handleCancel() {
    closeAddModal();
  }

  const handleDropdownOption = (option: string) => {
   setSelectedOption(option);
  };

  return (
    <>
      <ListHeader>
        <TitleText>결 보강 계획서</TitleText>
        <AddButton onClick={openAddModal}>계획서 추가</AddButton>
        {isAddModalOpen && (
          <DefaultModal
            height={590}
            open={isAddModalOpen}
            close={closeAddModal}
          >
            <p>결보강 계획서 추가 </p>
            <div>
              <Calendar />
              <Dropdown
                options={subjectDropDownItem}
                width={130}
                onClick={handleDropdownOption}
              />
            </div>
            <DropContainer>
              <Dropdown
                options={gradeDropDownItem}
                width={113}
                onClick={handleDropdownOption}
              />
              <Dropdown
                options={classDropDownItem}
                width={113}
                onClick={handleDropdownOption}
              />
              <Dropdown
                options={timeDropDownItem}
                width={113}
                onClick={handleDropdownOption}
              />
            </DropContainer>
            <PerformanceInput placeholder="보강 계획을 입력해주세요." />
            <Div>
              <Button onClick={handleCancel}>취소</Button>
              <Button>등록</Button>
            </Div>
          </DefaultModal>
        )}
      </ListHeader>
      <ReinforcementTitleList>
        <MainText>날짜(요일)</MainText>
        <MainText>교시</MainText>
        <MainText>학년-반</MainText>
        <MainText>결강 과목</MainText>
        <MainText>보강 계획</MainText>
        <MainText>보강교사</MainText>
      </ReinforcementTitleList>
      {ReinforcementList.map((item) => (
        <DetailReinforcementList
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

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 45px;
`;
const ListHeader = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  > div {
    display: flex;
  }
  p {
    color: ${({ theme }) => theme.colors.Black};
    font: ${({ theme }) => theme.font.SemiBold32};
    margin-bottom: 25px;
  }
`;

const TitleText = styled.div`
  font: ${({ theme }) => theme.font.SemiBold32};
  color: ${({ theme }) => theme.colors.Gray900};
  width: 210px;
`;

const MainText = styled.div`
  font: ${({ theme }) => theme.font.SemiBold24};
  color: ${({ theme }) => theme.colors.Gray800};
  width: 125px;
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

const DropContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 25px;
  margin-right: auto;
`;

export default PlanDetailReinforcement;
