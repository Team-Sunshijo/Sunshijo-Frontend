import styled from "styled-components";
import { TimetableListProps } from "../models/List";
import { useState } from "react";
import theme from "../../utils/theme/theme";

const List = ({
  date,
  grade_class,
  teacher,
  subject,
  reason,
  state,
}: TimetableListProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <ListBox isChecked={isChecked}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <Text>{date}</Text>
        <Text>{grade_class}</Text>
        <Text>{subject}</Text>
        <Text>{reason}</Text>
        <Text>{teacher}</Text>
        <StateText state={state}>{state}</StateText>
      </ListBox>
    </>
  );
};

const StateText = styled.div<{ state: string }>`
  // color: ${theme.colors.Main};
  color: ${(props) =>
    props.state === "요청중"
      ? theme.colors.Main
      : props.state === "수락"
      ? theme.colors.Green100
      : theme.colors.Red};
  font: ${({ theme }) => theme.font.Regular24};
`;

const ListBox = styled.div<{ isChecked: boolean }>`
display: flex;
  height: 92px;
  border-radius: 8px;
  border: 1px solid
    ${({ isChecked }) => (isChecked ? theme.colors.Main : theme.colors.Gray300)};
  margin-top: 25px;
  align-items: center;
  padding: 0 47px;
justify-content: space-between;
  :hover {
    border-color: ${({ theme }) => theme.colors.Main};
  }

  input {
    width: 24px;
    height: 24px;
    accent-color: ${({ theme }) => theme.colors.Main};
  }
`;

const Text=styled.div`
   font: ${({ theme }) => theme.font.Regular24};
    color: ${({ theme }) => theme.colors.Gray900};
`
export default List;
