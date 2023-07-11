import styled from "styled-components";
import TimetableHeader from "./timetableHeader";
import TimetableBody from "./timetableBody";
import React, { useState } from "react";

const TimetableManagement = () => {
  const [plan, setPlan] = useState("결보강");
  const [stated, setStated] = useState("요청중");

  return (
    <Container>
      <TimetableHeader
        plan={plan}
        setPlan={setPlan}
        stated={stated}
        setStated={setStated}
      />
      <TimetableBody plan={plan} stated={stated} />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 165px;
`;
export default TimetableManagement;
