import React, { useState } from "react";
import styled from "styled-components";
import { DropImg } from "../../../assets";

interface DropdownProps {
  options: { initialState: string; option: string[] };
  width: number;
}

const Dropdown: React.FC<DropdownProps> = ({ options, width }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectItem, setSelectItem] = useState<string>(options.initialState);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectItem(option);
    setIsOpen(false);
  };

  return (
    <DropContainer width={width}>
      <input
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        value={selectItem}
      />
      {isOpen && (
        <OptionList current={options.option.length > 4} width={width}>
          {options.option.map((option) => {
            return (
              <li key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            );
          })}
        </OptionList>
      )}
    </DropContainer>
  );
};

const DropContainer = styled.div<{ width: number }>`
  display: block;
  input {
    text-align: left;
    padding-left: 14px;
    font: ${({ theme }) => theme.font.Regular24};
    width: ${({ width }) => width}px;
    height: 40px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.White};
    border: 1px solid ${({ theme }) => theme.colors.Gray300};
    background: no-repeat calc(100% - 9px) center url(${DropImg});
  }
`;

const OptionList = styled.ul<{ width: number; current: boolean }>`
  background-color: ${({ theme }) => theme.colors.White};
  position: absolute;
  margin-top: 5px;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 176px;
  list-style-type: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 13px 7px;
  z-index: 1;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: ${(props) => (props.current ? "block" : "none")};
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.Main};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.Gray200};
    border-radius: 10px;
    border-radius: 8px;
    box-shadow: inset 0px 0px 5px white;
  }
  li {
    width: 100%;
    font: ${({ theme }) => theme.font.Regular24};
    :hover {
      background-color: ${({ theme }) => theme.colors.Gray100};
    }
    cursor: pointer;
  }
`;
export default Dropdown;
