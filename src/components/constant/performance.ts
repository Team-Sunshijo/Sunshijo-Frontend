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