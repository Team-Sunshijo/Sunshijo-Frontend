import React from "react";
import * as _ from "./style";
import { SignPerson } from "../../../assets/icons";

const SignFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <_.Container>
      <_.Wrapper>
        <_.IconArea>
          <img src={SignPerson} alt="" />
        </_.IconArea>
        {children}
      </_.Wrapper>
    </_.Container>
  );
};

export default SignFrame;
