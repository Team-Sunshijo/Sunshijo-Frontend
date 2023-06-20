import styled from "styled-components";
import TimetableHeader from "./timetableHeader";
import TimetableBody from "./timetableBody";

const TimetableManagement = () => {
  return (
    <Container>
      <TimetableHeader />
      <TimetableBody />
    </Container>
  );
};

const Container = styled.div`
padding: 0 165px;
`;
export default TimetableManagement;
