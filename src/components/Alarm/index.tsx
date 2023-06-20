import styled from "styled-components";
import Alarms from "./alarms";

const data = [
  {
    content: "손지원 선생님께서 시간표 변경을 요청하셨습니다",
    class1: "2022-12-19 (월) 1교시 수학",
    class2: "2022-12-21 (수) 5교시 운동과 건강",
    state: 2,
  },
  {
    content: "손지원 선생님께서 시간표 변경을 거절하셨습니다",
    class1: "2022-12-19 (월) 1교시 수학",
    class2: "2022-12-21 (수) 5교시 운동과 건강",
    state: 1,
  },
  {
    content: "손지원 선생님께서 시간표 변경을 요청하셨습니다",
    class1: "2022-12-19 (월) 1교시 수학",
    class2: "2022-12-21 (수) 5교시 운동과 건강",
    state: 0,
  },
  {
    content: "손지원 선생님께서 시간표 변경을 요청하셨습니다",
    class1: "2022-12-19 (월) 1교시 수학",
    class2: "2022-12-21 (수) 5교시 운동과 건강",
    state: 2,
  },
];

const Alarm = () => {
  return (
    <Body>
      <Container>
        <TitleText>알림</TitleText>
        {data.map((d) => {
          return (
            <Alarms
              state={d.state}
              class1={d.class1}
              class2={d.class2}
              content={d.content}
            />
          );
        })}
      </Container>
    </Body>
  );
};

const Body = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Container = styled.div`
  width: 481px;
  height: 624px;
  border-radius: 16px;
  box-shadow: 0 0 40px 0 rgb(0, 0, 0, 0.25);
  padding-bottom: 9px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffbd21;
    border-radius: 8px;
    background-clip: padding-box;
    height: 50%;
  }

  &::-webkit-scrollbar-track {
    background-color: #f7f7f7;
    border-radius: 8px;
  }
`;

const TitleText = styled.div`
  color: #292929;
  margin: 25px 0 0 26px;
  font: ${({ theme }) => theme.font.SemiBold24};
  cursor: default;
`;

export default Alarm;
