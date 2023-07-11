import * as _ from "./style";
import { PreviousIcon } from "../../../assets/icons";
import { NextIcon } from "../../../assets/icons";

const SchoolScheduleList = () => {
  return (
    <>
      <_.TitleText>
        <img src={PreviousIcon} />
        2023년 7월
        <img src={NextIcon} />
      </_.TitleText>
      <_.ScheduleBox>
        <_.SchoolSchedule>
          <_.Date>
            4<div>TUE</div>
          </_.Date>
          <_.Event>교내해커톤</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            5<div>WED</div>
          </_.Date>
          <_.Event>교내해커톤</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            6<div>THU</div>
          </_.Date>
          <_.Event>교내해커톤</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            8<div>SAT</div>
          </_.Date>
          <_.Event>입학설명회</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            12
            <div>WED</div>
          </_.Date>
          <_.Event>대프콘</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            13
            <div>THU</div>
          </_.Date>
          <_.Event>청죽제</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            14
            <div>FRI</div>
          </_.Date>
          <_.Event>여름방학식</_.Event>
        </_.SchoolSchedule>
      </_.ScheduleBox>
    </>
  );
};

export default SchoolScheduleList;
