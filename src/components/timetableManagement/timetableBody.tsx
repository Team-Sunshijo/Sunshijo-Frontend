import styled from "styled-components";
import List from "./timetableList";
import { TimetableList } from "../contance";

type Props = {
  plan: string;
  stated: string;
};

const TimetableBody = ({ plan, stated }: Props) => {
  let filteredList: typeof TimetableList = [];

  if (stated === "요청중") {
    filteredList = TimetableList.filter((item) => item.state === "요청중");
  } else if (stated === "수락") {
    filteredList = TimetableList.filter((item) => item.state === "수락");
  } else if (stated === "거절") {
    filteredList = TimetableList.filter((item) => item.state === "거절");
  }

  return (
    <>
      <TitleRow>
        <p>체크</p>
        <p>등록날짜</p>
        <p>학년-반</p>
        <p>{plan === "결보강" ? "결강" : "교체"}과목</p>
        {plan === "결보강" && <p>사유</p>}
        <p>요청교사</p>
        <p>상태</p>
      </TitleRow>
      {filteredList.map((item, i) => (
        <List
          key={i}
          date={item.date}
          grade_class={item.grade_class}
          teacher={item.teacher}
          subject={item.subject}
          reason={plan === "수업교체" ? "" : item.reason}
          state={item.state}
          plan={plan}
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
  padding: 20px 47px;
  margin-top: 15px;
justify-content: space-between;
  p {
    font: ${({ theme }) => theme.font.SemiBold24};
    color: ${({ theme }) => theme.colors.Gray900};
  margin-right: 20px;
  }
`;

export default TimetableBody;
