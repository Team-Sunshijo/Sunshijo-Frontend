import { BrowserRouter, Route, Routes } from "react-router-dom";
import {LoginPage,SignupPage} from "./pages"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
