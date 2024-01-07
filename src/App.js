import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import About from "./pages/About";

function App() {
  return (
    <div>
      {/* Header */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* Footer */}
    </div>
  );
}

export default App;
