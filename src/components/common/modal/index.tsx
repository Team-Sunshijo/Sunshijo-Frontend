import styled from "styled-components";
import {  ReactElement } from "react";

interface props {
  open: boolean;
  close: (v: boolean) => void;
  children: React.ReactNode;
}

const DefaultModal = (props: props): ReactElement => {
  const { children} = props;

  return (
    <ModalContainer>
      <ModalBox>
        {children}
      </ModalBox>
    </ModalContainer>
  );
};



const ModalContainer = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(33, 33, 33, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101 !important;
  cursor: pointer;
`;

const ModalBox = styled.div`
  width: 736px;
  height: 590px;
  cursor: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.White};
  padding: 30px 40px;
  z-index: 1;
  p {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.Black};
    font: ${({ theme }) => theme.font.SemiBold32};
  
  }
  > div {
    display: flex;
    gap: 75px;
    justify-content: center;
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
export default DefaultModal;
