import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import AlgorithmSimulation from "./pages/AlgorithmSimulation";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryId" element={<CategoryPage />} />
          <Route
            path="/:categoryId/:algorithmId"
            element={<AlgorithmSimulation />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
