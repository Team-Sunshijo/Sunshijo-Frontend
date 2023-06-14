import styled from "styled-components";
import { SignPerson } from "../../assets/icons";

const Signup = () => {
  return (
    <Container>
      <Wrapper>
        <IconWrapper>
          <img src={SignPerson} alt="" />
        </IconWrapper>
        <Content>
          <TitleText>회원가입</TitleText>
          <ContentText>아이디</ContentText>
          <Input placeholder="아이디를 입력해주세요." />
          <ContentText>비밀번호</ContentText>
          <Input placeholder="비밀번호를 입력해주세요." />
          <ContentText>이름</ContentText>
          <Input placeholder="이름을 입력해주세요." />
          <ContentText>인증코드</ContentText>
          <Input placeholder="인증코드를 입력해주세요." />
          <SignupBtn>회원가입</SignupBtn>
          <CheckWrapper>
            <CheckText>이미 계정이 있으신가요? </CheckText>
            <LoginText>로그인 하러가기</LoginText>
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
  height: 600px;
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
  padding: 35px 100px;
  display: flex;
  flex-direction: column;
  gap: 18px 0;
`;

const TitleText = styled.div`
  width: 85px;
  height: 30px;
  font: ${({ theme }) => theme.font.SemiBold24};
  border-bottom: 1px solid ${({ theme }) => theme.colors.Main};
`;

const ContentText = styled.div`
  height: 15px;
  font: ${({ theme }) => theme.font.SemiBold16};
`;

export const Input = styled.input`
  font: ${({ theme }) => theme.font.Regular14};
  width: 288px;
  height: 53px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.White};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  padding-left: 19px;
  outline: none;
`;

const SignupBtn = styled.button`
  width: 288px;
  height: 41px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.Main};
  margin: 20px 0 10px 0;
  color: ${({ theme }) => theme.colors.White};
  font: ${({ theme }) => theme.font.SemiBold16};
  cursor: pointer;
`;

const CheckWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
`;

const CheckText = styled.span`
  font: ${({ theme }) => theme.font.Regular12};
`;

const LoginText = styled.span`
  font: ${({ theme }) => theme.font.Medium12};
  color: ${({ theme }) => theme.colors.Main};
  cursor: pointer;
  margin-left: 2px;
`;

export default Signup;
