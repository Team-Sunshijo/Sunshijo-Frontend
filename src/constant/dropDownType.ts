interface dropdownType {
  initialState: string;
  option: string[];
}

export const gradeDropDownItem: dropdownType = {
  initialState: "1학년",
  option: ["1학년", "2학년", "3학년"],
};

export const classDropDownItem: dropdownType = {
  initialState: "1반",
  option: ["1반", "2반", "3반", "4반"],
};

export const timeDropDownItem: dropdownType = {
  initialState: "1교시",
  option: ["1교시", "2교시", "3교시", "4교시", "5교시", "6교시", "7교시"],
};

export const subjectDropDownItem: dropdownType = {
  initialState: "과목",
  option: ["한국사", "데베", "자바", "임베", "수학", "문학", "마제"],
};
