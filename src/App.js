import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import About from "./pages/About";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import MyPage from "./pages/MyPage";
import F2RApplication from "./components/MyPage/F2RApplication";

function App() {
  return (
    <div>
      {/* Header */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/mypage" element={<F2RApplication />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* Footer */}
    </div>
  );
}

export default App;
