import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LogoinPage";
import SignupPage from "./pages/SignupPage";
impoer 

function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={LoginPage} />
        <Route path="/signup" element={SignupPage} />
        <Route path="/performance" element={PerformancePage} />
      </Routes>
    </BrowserRouter>
  );
}
