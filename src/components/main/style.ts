import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  margin: 80px 0px 0px 0px;
  display: flex;
  justify-content: center;
`;

export const ScheduleWrapper = styled.div`
  padding: 25px 0 0 80px;
  height: 605px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ScheduleFrame = styled.div`
  width: 450px;
  height: 260px;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05),
    0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;
