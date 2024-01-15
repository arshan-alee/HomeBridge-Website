import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import About from "./pages/About";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import Header from "./components/Shared/Header";
import F2R from "./pages/F2R";
import JobDetails from "./pages/JobDetails";
import F2RApplication from "./pages/F2RApplication";
import RefundPage from "./pages/RefundPage";
import JobNHouse from "./pages/JobNHouse";
import Events from "./pages/Events";
import Footer from "./components/Shared/Footer";
import PaymentSuccess from "./pages/PaymentSuccess";
import EventDetails from "./pages/EventDetails";

function App() {
  const location = useLocation();

  const isAuthRoute = location.pathname.startsWith("/auth");
  // const isF2RApplicationRoute = location.pathname === "/mypage/f2r-application";

  const renderFooter = !isAuthRoute;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/f_2_r" element={<F2R />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/new-password" element={<NewPassword />} />
        <Route path="/job_house" element={<JobNHouse />} />
        <Route path="/event" element={<Events />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/f2r-application" element={<><Header /><F2RApplication /></>} />
        <Route path="/job_house/:id" element={<><Header /><JobDetails /></>} />
        <Route path="/event/:id" element={<><Header /><EventDetails /></>} />
        <Route path="/payment/success" element={<><Header /><PaymentSuccess /></>} />
        <Route path="/refund" element={<><Header /><RefundPage /></>} />
        <Route path="/about" element={<About />} />
      </Routes>
      {renderFooter && <Footer />}
      {/* Footer */}
    </div>
  );
}

export default App;
