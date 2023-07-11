import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminSignup } from "../../queries";
import * as _ from "./style";

const Signup = () => {

  const SignupValue = {
    accountId: "",
    password: "",
    name: "",
    signUpCode: "",
  };

  const [inputValues, setInputValues] = useState(SignupValue);
  const { accountId, password, name, signUpCode } = inputValues;
  const adminSignupMutaion = useAdminSignup();
  const navigate = useNavigate();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name: inputName } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });
  };

  const onSubmitSuccess = () => {
    alert("회원가입에 성공하셨습니다.");
    navigate("/login");
  };

  const onSubmitError = () => {
    alert("회원가입에 실패하셨습니다.");
  };

  const submitSignup = () => {
    adminSignupMutaion.mutate(
      {
        account_id: accountId,
        password: password,
        name: name,
        sign_up_code: signUpCode,
      },
      {
        onSuccess: onSubmitSuccess,
        onError: onSubmitError,
      }
    );
  };

  return (
    <_.Content>
      <_.TitleText>회원가입</_.TitleText>
      <_.ContentText>아이디</_.ContentText>
      <_.Input
        placeholder="아이디를 입력해주세요."
        name="accountId"
        value={accountId}
        onChange={onChangeInput}
      />
      <_.ContentText>비밀번호</_.ContentText>
      <_.Input
        placeholder="비밀번호를 입력해주세요."
        name="password"
        value={password}
        onChange={onChangeInput}
      />
      <_.ContentText>이름</_.ContentText>
      <_.Input
        placeholder="이름을 입력해주세요."
        name="name"
        value={name}
        onChange={onChangeInput}
      />
      <_.ContentText>인증코드</_.ContentText>
      <_.Input
        placeholder="인증코드를 입력해주세요."
        name="signUpCode"
        value={signUpCode}
        onChange={onChangeInput}
      />
      <_.SignupBtn onClick={submitSignup}>회원가입</_.SignupBtn>
      <_.CheckWrapper>
        <_.CheckText>이미 계정이 있으신가요? </_.CheckText>
        <_.LoginText  onClick={()=>{navigate("/login")}}>로그인 하러가기</_.LoginText>
      </_.CheckWrapper>
    </_.Content>
  );
};

export default Signup;
