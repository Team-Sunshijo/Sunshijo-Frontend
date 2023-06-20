import styled from "styled-components";
import connection from "../../assets/icons/Connection.svg";
import circle from "../../assets/icons/circle.png";

type Props = {
  state: number;
  class1: string;
  class2: string;
  content: string;
};

const Alarms = ({ state, class1, class2, content }: Props) => {
  return (
    <Box>
      <TextBox>
        <ContentText state={state}>{content}</ContentText>
        <ChangeBox>
          <Class>{class1}</Class>
          <Connection src={connection} />
          <Class>{class2}</Class>
        </ChangeBox>
      </TextBox>
      {state === 2 && <Circle src={circle} />}
    </Box>
  );
};

const Box = styled.div`
  margin: 15px 11px 0;
  padding: 11px 0 11px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBox = styled.div``;

const ContentText = styled.div<{ state: number }>`
  color: ${(props) =>
    props.state === 2 ? "#ffbd21" : props.state === 1 ? "#FF282F" : "#292929"};
  font: ${({ theme }) => theme.font.SemiBold16};
  margin-bottom: 5px;
  cursor: default;
`;

const ChangeBox = styled.div`
  display: flex;
`;

const Class = styled.p`
  color: ${({ theme }) => theme.colors.Gray500};
  font: ${({ theme }) => theme.font.Medium14};
  cursor: default;
`;

const Connection = styled.img`
  margin: 0 5px;
`;

const Circle = styled.img`
  width: 9px;
  height: 9px;
  margin-right: 16px;
`;

export default Alarms;
