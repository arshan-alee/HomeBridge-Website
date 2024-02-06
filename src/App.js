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
import ProtectedRoute from "./utils/ProtectedRoute";
import EditJobDetails from "./pages/EditJobDetails";
import EditF2RApplication from "./pages/EditF2RApplication";
import TransparentHeader from "./components/Shared/TransparentHeader";

function App() {
  const location = useLocation();

  const isAuthRoute = location.pathname.startsWith("/auth");
  const renderFooter = !isAuthRoute;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/new-password/:token" element={<NewPassword />} />
        <Route
          path="/f_2_r"
          element={
            <>
              <TransparentHeader />
              <F2R />
            </>
          }
        />
        <Route
          path="/job_house"
          element={
            <>
              <TransparentHeader />
              <JobNHouse />
            </>
          }
        />
        <Route
          path="/event"
          element={
            <>
              <TransparentHeader />
              <Events />
            </>
          }
        />
        <Route
          path="/mypage"
          element={
            <ProtectedRoute>
              <MyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/f2r-application"
          element={
            <>
              <Header />
              <F2RApplication />
            </>
          }
        />

        <Route
          path="/f2r-application/:id"
          element={
            <ProtectedRoute>
              <Header />
              <EditF2RApplication />
            </ProtectedRoute>
          }
        />

        <Route
          path="/job_house/:id"
          element={
            <>
              <Header />
              <JobDetails />
            </>
          }
        />

        <Route
          path="/job_house/:jobId/:applicationId"
          element={
            <ProtectedRoute>
              <Header />
              <EditJobDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/event/:id"
          element={
            <>
              <Header />
              <EventDetails />
            </>
          }
        />
        <Route
          path="/payment/success"
          element={
            <>
              <Header />
              <PaymentSuccess />
            </>
          }
        />
        <Route
          path="/refund"
          element={
            <>
              <Header />
              <RefundPage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              {/* <TransparentHeader /> */}
              <About />
            </>
          }
        />
      </Routes>
      {renderFooter && <Footer />}
    </div>
  );
}

export default App;
