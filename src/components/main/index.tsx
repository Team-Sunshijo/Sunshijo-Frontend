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
          <ClassChangeList />
          <SchoolScheduleList />
        </_.ScheduleWrapper>
      </_.Container>
    </>
  );
};

export default Main;
