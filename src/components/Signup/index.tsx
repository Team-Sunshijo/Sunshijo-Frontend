import styled from "styled-components";
import { theme } from "../../style/globalStyle";
import { SignImage } from "../../assets/Signup/index";

const Signup = () => {
  return (
    <Container>
      <Wrapper>
        <IconWrapper>
          <img src={SignImage} alt="" />
        </IconWrapper>
        <Content>
          <TitleWrapper>
            <TitleText>회원가입</TitleText>
            <TitleLine />
          </TitleWrapper>
          <InputWarpper>
            <ContentText>아이디</ContentText>
            <Input placeholder="아이디를 입력해주세요." />
            <ContentText>비밀번호</ContentText>
            <Input placeholder="비밀번호를 입력해주세요." />
            <ContentText>이름</ContentText>
            <Input placeholder="이름을 입력해주세요." />
            <ContentText>인증코드</ContentText>
            <Input placeholder="인증코드를 입력해주세요." />
          </InputWarpper>
          <LoginBtn>로그인</LoginBtn>
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
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  height: 600px;
  background-color: white;
  border-radius: 16px;
  border: solid 1px ${theme.Main};
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25));
`;

const IconWrapper = styled.div`
  width: 218px;
  height: 600px;
  background-color: ${theme.Main};
  border-radius: 16px 0 0 16px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Content = styled.div`
  width: 509px;
  height: 623px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  width: 288px;
  height: 30px;
  font-weight: 600;
  font-size: 24px;
  font-family: Pretendard;
  display: flex;
`;

const TitleLine = styled.div`
  width: 81px;
  height: 1px;
  background-color: ${theme.Main};
`;

const InputWarpper = styled.div`
  width: 288px;
`;

const ContentText = styled.div`
  width: 288px;
  height: 30px;
  font-weight: 600;
  font-size: 16px;
  font-family: pretendard;
  display: flex;
  margin-top: 20px;
`;

export const Input = styled.input`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  width: 266px;
  height: 53px;
  border: none;
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  padding-left: 19px;
  :focus {
    outline: none;
  }
  &::placeholder {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LoginBtn = styled.button`
  width: 288px;
  height: 41px;
  border: none;
  border-radius: 8px;
  background-color: ${theme.Main};
  margin-top: 30px;
  color: #ffffff;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
`;

const CheckWrapper = styled.div`
  width: 195px;
  height: 14px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const CheckText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const LoginText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${theme.Main};
  margin-left: 2px;
`;

export default Signup;
