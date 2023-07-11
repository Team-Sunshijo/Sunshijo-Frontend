import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Login = () => {
   const navigate = useNavigate();
  return (
    <Content>
      <TitleText>로그인</TitleText>
      <ContentText>아이디</ContentText>
      <Input placeholder="아이디를 입력해주세요." />
      <ContentText>비밀번호</ContentText>
      <Input placeholder="비밀번호를 입력해주세요." />
      <LoginBtn>로그인</LoginBtn>
      <CheckWrapper>
        <CheckText>계정이 없으신가요? </CheckText>
        <SignupText onClick={()=>{navigate("/signup")}}>회원가입하기</SignupText>
      </CheckWrapper>
    </Content>
  );
};

const Content = styled.div`
  width: 509px;
  height: 430px;
  padding: 30px 100px;
`;

const ContentText = styled.div`
  height: 30px;
  font: ${({ theme }) => theme.font.SemiBold16};
  margin-top: 30px;
`;

const TitleText = styled.div`
  width: 63px;
  height: 30px;
  font: ${({ theme }) => theme.font.SemiBold24};
  border-bottom: 1px solid ${({ theme }) => theme.colors.Main};
`;

const Input = styled.input`
  font: ${({ theme }) => theme.font.Regular14};
  width: 288px;
  height: 53px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.White};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  padding-left: 19px;
  outline: none;
`;

const LoginBtn = styled.button`
  width: 288px;
  height: 41px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.Main};
  margin: 30px 0 17px 0;
  color: ${({ theme }) => theme.colors.White};
  font: ${({ theme }) => theme.font.SemiBold16};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.Main800};
  }
`;

const CheckWrapper = styled.div`
  width: 160px;
  margin: 0 auto;
`;

const CheckText = styled.span`
  font: ${({ theme }) => theme.font.Regular12};
`;

const SignupText = styled.span`
  font: ${({ theme }) => theme.font.Medium12};
  color: ${({ theme }) => theme.colors.Main};
  margin-left: 2px;
  cursor: pointer;
`;

export default Login;
