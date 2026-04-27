import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Access from "./pages/Access";
import Home from "./pages/home";
import Titles from "./components/titles";
import MyProjects from "./components/MyProjects";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pantalla inicial */}
        <Route path="/" element={<Landing />} />

        {/* Formulario */}
        <Route path="/access" element={<Access />} />

        {/* Home protegido */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Rutas internas protegidas */}
        <Route
          path="/titles"
          element={
            <ProtectedRoute>
              <Titles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/MyProjects"
          element={
            <ProtectedRoute>
              <MyProjects />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;