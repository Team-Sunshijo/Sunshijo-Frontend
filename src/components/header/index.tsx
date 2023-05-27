import styled from "styled-components";
import { AlramIcon } from "../../assets";

const Header = () => {
  return (
    <HeaderArea>
      <Logo>로고</Logo>
      <Pages>
        <p>시간표 변경</p>
        <p>시간표 관리</p>
        <p>수행평가 등록</p>
        <Alarm src={AlramIcon} />
        <AcountButton>로그아웃</AcountButton>
      </Pages>
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  font: ${({ theme }) => theme.font.Regular16};
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 165px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
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
  p {
    cursor: pointer;
  }
`;

const Alarm = styled.img`
  cursor: pointer;
`;

const AcountButton = styled.button`
  color: ${({ theme }) => theme.colors.White};
  font: ${({ theme }) => theme.font.Regular16};
  background-color: ${({ theme }) => theme.colors.Main};
  border: 1px solid ${({ theme }) => theme.colors.Main};
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
`;

export default Header;
