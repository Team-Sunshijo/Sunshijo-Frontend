import styled from "styled-components";
import List from "./timetableList";
import { TimetableList } from "../contance";

const TimetableBody = () => {
  return (
    <>
      <TitleRow>
        <p>체크</p>
        <p>등록날짜</p>
        <p>학년-반</p>
        <p>결강과목</p>
        <p>사유</p>
        <p>요청교사</p>
        <p>상태</p>
      </TitleRow>
      {TimetableList.map((item) => (
        <List
          date={item.date}
          grade_class={item.grade_class}
          teacher={item.teacher}
          subject={item.subject}
          reason={item.reason}
          state={item.state}
        />
      ))}
    </>
  );
};

const TitleRow = styled.div`
  display: flex;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.Gray100};
  border-radius: 8px;
  justify-content: space-between;
  padding: 20px 47px;
  margin-top: 15px;
 
  p {
    font: ${({ theme }) => theme.font.SemiBold24};
    color: ${({ theme }) => theme.colors.Gray900};
  }
`;

export default TimetableBody;
