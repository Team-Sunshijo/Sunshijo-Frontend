interface dropdownType {
    initialState: string;
    option: string[];
  }
  
  export const PlanDropDownItem: dropdownType = {
    initialState: "결보강",
    option: ["결보강", "수업교체"],
  };
  
  export const StateDropDownItem: dropdownType = {
    initialState: "요청중",
    option: ["요청중", "수락", "거절"],
  };
  