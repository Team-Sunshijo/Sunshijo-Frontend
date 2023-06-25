import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage, MainPage } from "./pages";
import PlanWritingDetailPage from "./pages/PlanWritingDetailPage";
import PlanWritingPage from "./pages/PlanWritingPage";
import PerformancePage from "./pages/PerformancePage";
import TimetablePage from "./pages/TimetableManagementPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="planWriting" element={<PlanWritingPage />} />
        <Route path="planWritingDetail" element={<PlanWritingDetailPage />} />
        <Route path="timetableManagement" element={<TimetablePage />} />
        <Route path="performance" element={<PerformancePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
