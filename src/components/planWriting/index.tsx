import styled from "styled-components";
import { PlanWList } from "../contance/index";
import PlanWritingList from "./planWritingList";
import { useNavigate } from "react-router-dom";

const PlanWriting = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <p>계획서 작성</p>

        <AddButton
          onClick={() => {
            navigate("/planWritingDetail");
          }}
        >
          계획서 추가
        </AddButton>
      </Header>
      <div>
        <TitleList>
          <p>날짜(요일)</p>
          <p>사유</p>
          <p>요청교사</p>
          <p>부담임</p>
        </TitleList>
        {PlanWList.map((item) => (
          <PlanWritingList
            date={item.date}
            reason={item.reason}
            request_teacher={item.request_teacher}
            middle_teacher={item.middle_teacher}
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
 padding-top: 70px;
 padding-left: 165px;
 padding-right: 160px;
margin-top: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font: ${({ theme }) => theme.font.SemiBold32};
  }
`;

const AddButton = styled.button`
  width: 122px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.Main};
  border: none;
  border-radius: 8px;
  font: ${({ theme }) => theme.font.SemiBold16};

  color: ${({ theme }) => theme.colors.White};

  :hover {
    background-color: ${({ theme }) => theme.colors.Main800};
    transition: all 0.3s;
  }
`;

const TitleList = styled.div`
  display: flex;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.Gray100};
  border-radius: 8px;
  justify-content: space-between;
  padding: 20px 47px;
  margin-top: 15px;
  p {
    font: ${({ theme }) => theme.font.SemiBold24};
    width: 125px;
  }
`;

export default PlanWriting;
