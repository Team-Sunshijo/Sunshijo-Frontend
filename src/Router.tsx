import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LogoinPage";
import PlanWritingDetailPage from "./pages/PlanWritingDetailPage";
import PlanWritingPage from "./pages/PlanWritingPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="planWriting" element={<PlanWritingPage />} />
        <Route path="planWritingDetail" element={<PlanWritingDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
