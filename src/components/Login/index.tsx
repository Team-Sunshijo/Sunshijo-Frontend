import styled from "styled-components";
import { SignPerson } from "../../assets/icons";
import theme from "../../utils/theme/theme";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <IconWrapper>
          <img src={SignPerson} alt="" />
        </IconWrapper>
        <Content>
          <TitleText>로그인</TitleText>
          <p>아이디</p>
          <Input placeholder="아이디를 입력해주세요." />
          <p>비밀번호</p>
          <Input placeholder="비밀번호를 입력해주세요." />
          <LoginBtn>로그인</LoginBtn>
          <CheckWrapper>
            <CheckText>계정이 없으신가요? </CheckText>
            <SignupText>회원가입하기</SignupText>
          </CheckWrapper>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  height: 475px;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 16px;
  border: solid 1px ${({ theme }) => theme.colors.Main};
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25));
`;

const IconWrapper = styled.div`
  width: 218px;
  background-color: ${({ theme }) => theme.colors.Main};
  border-radius: 16px 0 0 16px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Content = styled.div`
  width: 509px;
  height: 430px;
  flex-direction: column;
  padding: 44px 100px;
  p {
    height: 30px;
    font: ${({ theme }) => theme.font.SemiBold16};
    margin-top: 30px;
  }
`;

const TitleText = styled.div`
  width: 63px;
  height: 30px;
  font: ${({ theme }) => theme.font.SemiBold24};
  border-bottom: 1px solid ${({ theme }) => theme.colors.Main};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
  margin: 47px 0 17px 0;
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
