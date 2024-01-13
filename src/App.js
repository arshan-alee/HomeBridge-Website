import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import About from "./pages/About";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import Header from "./components/Shared/Header";
import F2R from "./pages/F2R";
import JobPage from "./components/MyPage/JobPage";
import F2RApplication from "./pages/F2RApplication";
import RefundPage from "./pages/RefundPage";
import EventPage from "./pages/EventPage";
import JobNHouse from "./pages/JobNHouse";
import Events from "./pages/Events";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/f_2_r" element={<F2R />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/job_house" element={<JobNHouse />} />
        <Route path="/event" element={<Events />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/f2r-application" element={<><Header /><F2RApplication /></>} />
        <Route path="/job_house/:id" element={<><Header /><JobPage /></>} />
        <Route path="/event/:id" element={<><Header /><EventPage /></>} />
        <Route path="/refund" element={<><Header /><RefundPage /></>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default App;
