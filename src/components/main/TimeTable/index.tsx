import * as _ from "./style";
import { ExplainIcon } from "../../../assets/icons";

const TimeTable = () => {
  return (
    <div>
      <_.ExplainText>
        <img src={ExplainIcon} alt="" />
        노란색 표시는 바뀐 시간표입니다.
      </_.ExplainText>
      <_.Table>
        <_.Day>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
        </_.Day>
        <table>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>창체</td>
            <td>한국사</td>
            <td>영어</td>
            <td>성직</td>
            <td>운체</td>
            <td>운건</td>
            <td>데베</td>
          </tr>
          <tr>
            <td>수학</td>
            <td>성직</td>
            <td>운건</td>
            <td>데베</td>
            <td>영어</td>
            <td>한국사</td>
            <td>운체</td>
          </tr>
          <tr>
            <td>문학</td>
            <td>운체</td>
            <td>데베</td>
            <td>한국사</td>
            <td>수학</td>
            <td>자바</td>
            <td>자바</td>
          </tr>
          <tr>
            <td>자바</td>
            <td>자바</td>
            <td>수학</td>
            <td>문학</td>
            <td>운체</td>
            <td>창체</td>
            <td>창체</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>빅분</td>
            <td>빅분</td>
            <td>빅분</td>
            <td>데베</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </_.Table>
    </div>
  );
};

export default TimeTable;
