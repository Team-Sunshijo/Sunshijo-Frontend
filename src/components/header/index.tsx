import styled from "styled-components";
import { Alram } from "../../assets/icons";
import DefaultModal from "../common/modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleCancel() {
    closeModal();
  }

  return (
    <HeaderArea>
      <Logo  onClick={()=>{navigate("/main")}}>로고</Logo>
      <Pages>
      <p onClick={()=>{navigate("/planWriting")}}>시간표 변경</p>
        <p onClick={()=>{navigate("/timetableManagement")}} >시간표 관리</p>
        <p onClick={()=>{navigate("/performance")}}>수행평가 등록</p>
        <img src={Alram} />
        <AcountButton onClick={openModal}>로그아웃</AcountButton>
        {isModalOpen && (
          <DefaultModal height={300} open={isModalOpen} close={closeModal}>
            <MainTitle>로그아웃 하시겠습니까?</MainTitle>
            <Div>
              <Button onClick={handleCancel}>취소</Button>
              <Button onClick={() => {navigate("/login"); handleCancel();}}>로그아웃</Button>
            </Div>
          </DefaultModal>
        )}
      </Pages>
    </HeaderArea>
  );
};

const MainTitle = styled.div`
  font: ${({ theme }) => theme.font.SemiBold32};
  justify-content: center;
  margin-top: 35px;
`;

const Button = styled.button`
  margin-top: 55px;
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

const HeaderArea = styled.div`
  font: ${({ theme }) => theme.font.Regular16};
  background-color: ${({ theme }) => theme.colors.White};
  width: 100vw;
  height: 30px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 165px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  p,
  img,
  button {
    cursor: pointer;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 45px;
`;

const Logo = styled.div`
  cursor: pointer;
  /* 로고가 아직 없어서 div로 대체했습닌다.  */
`;

const Pages = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  align-items: center;
`;

const AcountButton = styled.button`
  color: ${({ theme }) => theme.colors.White};
  font: ${({ theme }) => theme.font.Regular16};
  background-color: ${({ theme }) => theme.colors.Main};
  border: 1px solid ${({ theme }) => theme.colors.Main};
  border-radius: 8px;
  padding: 6px 12px;
  :hover {
    background-color: ${({ theme }) => theme.colors.Main800};
  }
`;

export default Header;
