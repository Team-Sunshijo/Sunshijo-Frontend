import styled from "styled-components";
import TimetableHeader from "./timetableHeader";
import TimetableBody from "./timetableBody";
import { useState } from "react";

const TimetableManagement = () => {
  const [plan, setPlan] = useState("결보강");

  return (
    <Container>
      <TimetableHeader plan={plan} setPlan={setPlan} />
      <TimetableBody plan={plan} setPlan={setPlan} />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 165px;
`;
export default TimetableManagement;
