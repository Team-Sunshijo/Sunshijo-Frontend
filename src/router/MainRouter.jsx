import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LogoinPage";
import SignupPage from "../pages/SignupPage";
import PerformancePage from "../pages/PerformancePage";
import PlanWritingPage from "./pages/PlanWritingPage";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={LoginPage} />
        <Route path="/signUp" element={SignupPage} />
        <Route path="/performance" element={PerformancePage} />
        <Route path="/planWriting" element={PlanWritingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
