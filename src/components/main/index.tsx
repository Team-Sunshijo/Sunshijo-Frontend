import * as _ from "./style";
import TimeTable from "./TimeTable";
import ClassChangeList from "./ClassChangeList";
import SchoolScheduleList from "./SchoolScheduleList";

const Main = () => {
  return (
    <>
      <_.Container>
        <TimeTable />
        <_.ScheduleWrapper>
          <_.ScheduleFrame>
            <ClassChangeList />
          </_.ScheduleFrame>
          <_.ScheduleFrame>
            <SchoolScheduleList />
          </_.ScheduleFrame>
        </_.ScheduleWrapper>
      </_.Container>
    </>
  );
};

export default Main;
