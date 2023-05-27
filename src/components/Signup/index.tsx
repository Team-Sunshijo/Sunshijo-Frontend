import styled from "styled-components";
import { SignImage } from "../../assets/Signup";

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
            <p>아이디</p>
            <Input placeholder="아이디를 입력해주세요." />
            <p>비밀번호</p>
            <Input placeholder="비밀번호를 입력해주세요." />
            <p>이름</p>
            <Input placeholder="이름을 입력해주세요." />
            <p>인증코드</p>
            <Input placeholder="인증코드를 입력해주세요." />
          </InputWarpper>
          <LoginBtn>로그인</LoginBtn>
          <CheckWrapper>
            <div>이미 계정이 있으신가요? </div>
            <GoLogin>로그인 하러가기</GoLogin>
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
  height: 600px;
  background-color: ${({ theme }) => theme.colors.Main};
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
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px 0;
  p {
    width: 288px;
    height: 15px;
    font: ${({ theme }) => theme.font.SemiBold16};
    display: flex;
    margin: 18px 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  width: 288px;
  height: 30px;
  font: ${({ theme }) => theme.font.SemiBold24};
  display: flex;
`;

const TitleLine = styled.div`
  width: 81px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.Main};
`;

const InputWarpper = styled.div`
  width: 288px;
`;

export const Input = styled.input`
  font: ${({ theme }) => theme.font.Regular14};
  width: 266px;
  height: 53px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.White};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  padding-left: 19px;
  :focus {
    outline: none;
  }
  &::placeholder {
    font: ${({ theme }) => theme.font.Regular14};
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
  background-color: ${({ theme }) => theme.colors.Main};
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.White};
  font: ${({ theme }) => theme.font.SemiBold16};

  :hover {
    background-color: ${({ theme }) => theme.colors.Main};
  }
`;

const CheckWrapper = styled.div`
  width: 195px;
  height: 14px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  div {
    font: ${({ theme }) => theme.font.Regular12};
  }
`;

const GoLogin = styled.div`
  font: ${({ theme }) => theme.font.Medium12};
  color: ${({ theme }) => theme.colors.Main};
  margin-left: 2px;
`;

export default Signup;
