import styled from "styled-components";
import { List } from "../contance";
import PerformanceList from "./performancelist";
const Performance = () => {
  return (
    <Container>
      <Header>
        <p>수행평가 등록</p>
        <Button>수행평가 등록</Button>
      </Header>
      <TitleRow>
        <p>날짜(요일)</p>
        <p>학년-반</p>
        <p>과목</p>
        <p>담당교사</p>
      </TitleRow>
      {List.map((item) => (
        <PerformanceList date={item.date}grade_class={item.grade_class}teacher={item.teacher}subject={item.subject}/>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 0 165px;
`;
const Header = styled.div`
  p {
    font-family: "Pretendard";
    line-height: 30px;
    font-weight: 700;
    font: ${({ theme }) => theme.font.SemiBold32};
    width: 174px;
    height: 30px;
    color: ${({ theme }) => theme.colors.Gray900};
    margin-top: 151px;
  }
  justify-content: space-between;
  display: flex;
`;
const Button = styled.button`
  width: 136px;
  height: 48px;
  left: 1619px;
  padding: 11px 24px;
  border: none;
  background-color: ${({ theme }) => theme.colors.Main};
  border-radius: 8px;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.White};
  margin-top: 143px;
  :hover {
    background-color: ${({ theme }) => theme.colors.Main800};
  }
`;
const TitleRow = styled.div`
  display: flex;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.Gray100};
  border-radius: 8px;
  justify-content: space-between;
  padding: 20px 47px;
  margin-top: 15px;
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font: ${({ theme }) => theme.font.SemiBold24};
    width: 125px;
  }
`;

export default Performance;