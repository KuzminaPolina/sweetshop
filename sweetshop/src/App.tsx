import "./App.css";
import Home from "./pages/Home";
import Sets from "./pages/PremadeSets";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/sets" element={<Sets />} />
      </Route>
    </Routes>
  );
}

export default App;
