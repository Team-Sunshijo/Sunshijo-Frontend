import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading..</div>}>
        <></>
      </Suspense>
    </BrowserRouter>
  );
};
