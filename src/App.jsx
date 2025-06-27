import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Titles from "./components/titles";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/titles" element={<Titles />} />
         <Route path="/MyProjects" element={<MyProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
