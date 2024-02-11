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
import { useEffect, useState } from "react";
import { useStateContext } from "./context/StateContext";
import EditEventApplication from "./pages/EditEventApplication";

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { isLoggedIn, setIsLoggedIn } = useStateContext();
  const [userName, setUserName] = useState("");

  const isAuthRoute = location.pathname.startsWith("/auth");
  const renderFooter = !isAuthRoute;

  const checkUserToken = () => {
    const Info = localStorage.getItem("Info");
    const userToken = JSON.parse(Info)?.token;

    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return;
    }
    const userName = JSON.parse(Info)?.userName;
    setUserName(userName.split(" ")[0]);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
    const handleLoginChange = () => {
      checkUserToken();
    };

    // setup the event listeners:
    window.addEventListener("login", handleLoginChange);
    window.addEventListener("logout", handleLoginChange);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("login", handleLoginChange);
      window.removeEventListener("logout", handleLoginChange);
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <Home />
            </>
          }
        />
        <Route
          path="/auth/register"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <Register />
            </>
          }
        />
        <Route
          path="/auth/login"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <Login />
            </>
          }
        />
        <Route
          path="/auth/forgot-password"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <ForgotPassword />
            </>
          }
        />
        <Route
          path="/auth/new-password/:token"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <NewPassword />
            </>
          }
        />
        <Route
          path="/f_2_r"
          element={
            <>
              <TransparentHeader isLoggedIn={isLoggedIn} userName={userName} />
              <F2R />
            </>
          }
        />
        <Route
          path="/job_house"
          element={
            <>
              <TransparentHeader isLoggedIn={isLoggedIn} userName={userName} />
              <JobNHouse />
            </>
          }
        />
        <Route
          path="/event"
          element={
            <>
              <TransparentHeader isLoggedIn={isLoggedIn} userName={userName} />
              <Events />
            </>
          }
        />
        <Route
          path="/mypage"
          element={
            <ProtectedRoute>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <MyPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/f_2_r/application"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <F2RApplication />
            </>
          }
        />

        <Route
          path="/f_2_r/application/:id"
          element={
            <ProtectedRoute>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <EditF2RApplication />
            </ProtectedRoute>
          }
        />

        <Route
          path="/job_house/:id"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <JobDetails />
            </>
          }
        />

        <Route
          path="/job_house/:jobId/:applicationId"
          element={
            <ProtectedRoute>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <EditJobDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/event/:id"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <EventDetails />
            </>
          }
        />
        <Route
          path="/event/:eventId/:applicationId"
          element={
            <ProtectedRoute>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <EditEventApplication />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment/success/:eventId"
          element={
            <>
              <Header isLoggedIn={isLoggedIn} userName={userName} />
              <PaymentSuccess />
            </>
          }
        />
        <Route
          path="/refund/:applicationId"
          element={
            <>
              {/* <Header isLoggedIn={isLoggedIn} userName={userName} /> */}
              <RefundPage isLoggedIn={isLoggedIn} userName={userName} />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <TransparentHeader isLoggedIn={isLoggedIn} userName={userName} />
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
