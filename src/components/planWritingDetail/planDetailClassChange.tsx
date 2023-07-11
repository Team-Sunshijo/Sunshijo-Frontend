import styled from "styled-components";
import { ClassChangeList } from "../contance/index";
import { useState } from "react";
import {
  gradeDropDownItem,
  classDropDownItem,
  timeDropDownItem,
  subjectDropDownItem,
} from "../../constant/dropDownType";
import Calendar from "../common/calender";
import Dropdown from "../common/dropDown";
import DetailClassChangeList from "./detailClassChangeList";
import DefaultModal from "../common/modal";

const PlanDetailClassChange = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddNextModalOpen, setIsAddNextModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  function openAddModal() {
    setIsAddModalOpen(true);
  }

  function closeAddModal() {
    setIsAddModalOpen(false);
  }

  function closeAddNextModal() {
    setIsAddNextModalOpen(false);
  }

  function handleCancel() {
    closeAddModal();
    closeAddNextModal();
  }

  function handleNext() {
    setIsAddModalOpen(false);
    setIsAddNextModalOpen(true);
  }

  function handleBefore() {
    setIsAddModalOpen(true);
    setIsAddNextModalOpen(false);
  }

  const handleDropdownOption = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <>
      <ListHeader>
        <TitleText>수업교체 계획서</TitleText>
        <AddButton onClick={openAddModal}>계획서 추가</AddButton>
        {isAddModalOpen && (
          <DefaultModal
            height={590}
            open={isAddModalOpen}
            close={closeAddModal}
          >
            <p style={{ marginBottom: "25px" }}>수업교체 계획서 추가</p>
            <div>
              <Calendar />
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
                onClick={handleCancel}
              />
              <Dropdown
                options={subjectDropDownItem}
                width={113}
                onClick={handleDropdownOption}
              />
            </DropContainer>
            <Div>
              <Button onClick={handleCancel}>취소</Button>
              <Button onClick={handleNext}>다음</Button>
            </Div>
          </DefaultModal>
        )}
        {isAddNextModalOpen && (
          <DefaultModal
            height={590}
            open={isAddNextModalOpen}
            close={closeAddNextModal}
          >
            <p style={{ marginBottom: "25px" }}>수업교체 계획서 추가</p>
            <div>
              <Calendar />{" "}
              <Dropdown
                options={subjectDropDownItem}
                width={113}
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
              <Dropdown
                options={subjectDropDownItem}
                width={113}
                onClick={handleDropdownOption}
              />
            </DropContainer>
            <Div>
              <Button onClick={handleBefore}>이전</Button>
              <Button>등록</Button>
            </Div>
          </DefaultModal>
        )}
      </ListHeader>
      <ClassChangeTitleList>
        <MainText>날짜(요일)</MainText>
        <MainText>교시</MainText>
        <MainText>학년-반</MainText>
        <MainText>과목</MainText>
        <MainText>담당교사</MainText>
      </ClassChangeTitleList>
      {ClassChangeList.map((item) => (
        <DetailClassChangeList
          date={item.date}
          lesson={item.lesson}
          grade_class={item.grade_class}
          subject_replace={item.subject_replace}
          change_date={item.change_date}
          change_lesson={item.change_lesson}
          change_grade_class={item.change_grade_class}
          replace_subject={item.replace_subject}
          charge_teacher={item.charge_teacher}
        />
      ))}
    </>
  );
};

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
    transition: all 0.3s;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 45px;
`;

const DropContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 130px;
  margin-bottom: 177px;
  margin-right: auto;
`;

const ListHeader = styled.div`
  display: flex;
  margin-top: 90px;
  justify-content: space-between;
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
    transition: all 0.3s;
  }
`;

const ClassChangeTitleList = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.Gray100};
  border-radius: 8px;
  padding: 20px 47px;
  margin-top: 15px;
`;

export default PlanDetailClassChange;
