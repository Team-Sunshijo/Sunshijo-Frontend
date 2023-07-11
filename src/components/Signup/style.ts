import styled from "styled-components";

export const Content = styled.div`
  width: 509px;
  padding: 35px 100px;
  display: flex;
  flex-direction: column;
  gap: 18px 0;
`;

export const TitleText = styled.div`
  width: 85px;
  height: 30px;
  font: ${({ theme }) => theme.font.SemiBold24};
  border-bottom: 1px solid ${({ theme }) => theme.colors.Main};
`;

export const ContentText = styled.div`
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

export const SignupBtn = styled.button`
  width: 288px;
  height: 41px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.Main};
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.White};
  font: ${({ theme }) => theme.font.SemiBold16};
  cursor: pointer;
`;

export const CheckWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
`;

export const CheckText = styled.span`
  font: ${({ theme }) => theme.font.Regular12};
`;

export const LoginText = styled.span`
  font: ${({ theme }) => theme.font.Medium12};
  color: ${({ theme }) => theme.colors.Main};
  cursor: pointer;
  margin-left: 2px;
`;
