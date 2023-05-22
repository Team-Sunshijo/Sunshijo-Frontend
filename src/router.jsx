import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LogoinPage";
import SignupPage from "./pages/SignupPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={LoginPage} />
        <Route path="/register" element={SignupPage} />
      </Routes>
    </BrowserRouter>
  );
}
