import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< refs/remotes/origin/main
import {LoginPage,SignupPage} from "./pages"
=======
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LogoinPage";
import PlanWritingDetailPage from "./pages/PlanWritingDetailPage";
import PlanWritingPage from "./pages/PlanWritingPage";
>>>>>>> 📝 :: 컴플릭트 해결

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
<<<<<<< refs/remotes/origin/main
=======
        <Route path="planWriting" element={<PlanWritingPage />} />
        <Route path="planWritingDetail" element={<PlanWritingDetailPage />} />
>>>>>>> 📝 :: 컴플릭트 해결
      </Routes>
    </BrowserRouter>
  );
}

<<<<<<< refs/remotes/origin/main
export default Router;
=======
export default Router;
>>>>>>> 📝 :: 컴플릭트 해결
