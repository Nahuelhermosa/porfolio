import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Titles from "./components/titles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/titles" element={<Titles />} />
      </Routes>
    </Router>
  );
}

export default App;
