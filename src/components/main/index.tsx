import * as _ from "./style";
import Header from "../header";
import TimeTable from "../timetable";
import ClassChangeList from "../ClassChangeList";
import SchoolScheduleList from "../SchoolScheduleList";

const Main = () => {
  return (
    <>
      <Header />
      <_.Container>
        <TimeTable />
        <_.ScheduleWrapper>
          <ClassChangeList />
          <SchoolScheduleList />
        </_.ScheduleWrapper>
      </_.Container>
    </>
  );
};

export default Main;
