import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import About from "./pages/About";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import F2RApplication from "./components/MyPage/F2RApplication";
import Header from "./components/Shared/Header";
import F2R from "./pages/F2R";
import JobPage from "./components/MyPage/JobPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/f_2_r" element={<F2R />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/f2r-application" element={<F2RApplication />} />
        <Route path="/mypage/job-house" element={<JobPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* Footer */}
    </div>
  );
}

export default App;
