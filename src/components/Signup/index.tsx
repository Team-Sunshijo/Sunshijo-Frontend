import * as _ from "./style";

const Signup = () => {
  return (
    <_.Content>
      <_.TitleText>회원가입</_.TitleText>
      <_.ContentText>아이디</_.ContentText>
      <_.Input placeholder="아이디를 입력해주세요." />
      <_.ContentText>비밀번호</_.ContentText>
      <_.Input placeholder="비밀번호를 입력해주세요." />
      <_.ContentText>이름</_.ContentText>
      <_.Input placeholder="이름을 입력해주세요." />
      <_.ContentText>인증코드</_.ContentText>
      <_.Input placeholder="인증코드를 입력해주세요." />
      <_.SignupBtn>회원가입</_.SignupBtn>
      <_.CheckWrapper>
        <_.CheckText>이미 계정이 있으신가요? </_.CheckText>
        <_.LoginText>로그인 하러가기</_.LoginText>
      </_.CheckWrapper>
    </_.Content>
  );
};

export default Signup;
