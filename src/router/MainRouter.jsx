import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import PerformancePage from "../pages/PerformancePage";
import PlanWritingPage from "./pages/PlanWritingPage";
import PlanWritingDetailPage from "../pages/PlanWritingDetailPage";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={LoginPage} />
        <Route path="/signUp" element={SignupPage} />
        <Route path="/performance" element={PerformancePage} />
        <Route path="/planWriting" element={PlanWritingPage} />
        <Route path="/planWritingDetail" element={PlanWritingDetailPage} />
      </Routes>
    </BrowserRouter>
  );
}

<<<<<<< Updated upstream
export default MainRouter;
=======
export default MainRouter;
>>>>>>> Stashed changes
