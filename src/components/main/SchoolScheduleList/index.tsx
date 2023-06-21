import * as _ from "./style";
import { PreviousIcon } from "../../../assets/icons";
import { NextIcon } from "../../../assets/icons";

const SchoolScheduleList = () => {
  return (
    <>
      <_.TitleText>
        <img src={PreviousIcon} />
        2023년 5월
        <img src={NextIcon} />
      </_.TitleText>
      <_.ScheduleBox>
        <_.SchoolSchedule>
          <_.Date>
            29
            <div>MON</div>
          </_.Date>
          <_.Event>체육대회</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            30
            <div>TUE</div>
          </_.Date>
          <_.Event>전공동아리</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            31
            <div>WED</div>
          </_.Date>
          <_.Event>프로젝트반</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            31
            <div>WED</div>
          </_.Date>
          <_.Event>프로젝트반</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            31
            <div>WED</div>
          </_.Date>
          <_.Event>프로젝트반</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            31
            <div>WED</div>
          </_.Date>
          <_.Event>프로젝트반</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            31
            <div>WED</div>
          </_.Date>
          <_.Event>프로젝트반</_.Event>
        </_.SchoolSchedule>
        <_.SchoolSchedule>
          <_.Date>
            31
            <div>WED</div>
          </_.Date>
          <_.Event>프로젝트반</_.Event>
        </_.SchoolSchedule>
      </_.ScheduleBox>
    </>
  );
};

export default SchoolScheduleList;
