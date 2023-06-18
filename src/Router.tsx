import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage } from "./pages";
import MainPage from "./pages/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
