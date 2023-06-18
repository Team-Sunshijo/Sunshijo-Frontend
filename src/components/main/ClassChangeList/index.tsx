import * as _ from "./style";
import { ChangeIcon } from "../../../assets/icons";

const ClassChangeList = () => {
  return (
    <>
      <_.ClassChangeWrapper>
        <_.TitleText>교체된 수업</_.TitleText>
        <_.ClassChangeBox>
          <div>
            <_.ClassChange>
              <_.Class>
                한국사
                <div>5-29(월) 2교시 박서영</div>
              </_.Class>
              <img src={ChangeIcon} />
              <_.Class>
                성직
                <div>5-30(화) 2교시 김동하</div>
              </_.Class>
            </_.ClassChange>
            <_.ClassChange>
              <_.Class>
                영어
                <div>5-29(월) 3교시 고은영</div>
              </_.Class>
              <img src={ChangeIcon} />
              <_.Class>
                운건
                <div>5-30(화) 3교시 김현태</div>
              </_.Class>
            </_.ClassChange>
            <_.ClassChange>
              <_.Class>
                성직
                <div>5-29(월) 4교시 김동하</div>
              </_.Class>
              <img src={ChangeIcon} />
              <_.Class>
                데베
                <div>5-30(화) 4교시 안현수</div>
              </_.Class>
            </_.ClassChange>
            <_.ClassChange>
              <_.Class>
                성직
                <div>5-29(월) 4교시 김동하</div>
              </_.Class>
              <img src={ChangeIcon} />
              <_.Class>
                데베
                <div>5-30(화) 4교시 안현수</div>
              </_.Class>
            </_.ClassChange>
            <_.ClassChange>
              <_.Class>
                영어
                <div>5-29(월) 3교시 고은영</div>
              </_.Class>
              <img src={ChangeIcon} />
              <_.Class>
                운건
                <div>5-30(화) 3교시 김현태</div>
              </_.Class>
            </_.ClassChange>
            <_.ClassChange>
              <_.Class>
                성직
                <div>5-29(월) 4교시 김동하</div>
              </_.Class>
              <img src={ChangeIcon} />
              <_.Class>
                데베
                <div>5-30(화) 4교시 안현수</div>
              </_.Class>
            </_.ClassChange>
            <_.ClassChange>
              <_.Class>
                성직
                <div>5-29(월) 4교시 김동하</div>
              </_.Class>
              <img src={ChangeIcon} />
              <_.Class>
                데베
                <div>5-30(화) 4교시 안현수</div>
              </_.Class>
            </_.ClassChange>
            <_.ClassChange>
              <_.Class>
                성직
                <div>5-29(월) 4교시 김동하</div>
              </_.Class>
              <img src={ChangeIcon} />
              <_.Class>
                데베
                <div>5-30(화) 4교시 안현수</div>
              </_.Class>
            </_.ClassChange>
          </div>
        </_.ClassChangeBox>
      </_.ClassChangeWrapper>
    </>
  );
};

export default ClassChangeList;
