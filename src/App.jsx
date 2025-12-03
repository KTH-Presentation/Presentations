import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Grupp1 from "./pages/Grupp1";
import Grupp2 from "./pages/Grupp2";
import Grupp3 from "./pages/Grupp3";
import Grupp4 from "./pages/Grupp4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/grupp1" element={<Grupp1 />} />
      <Route path="/grupp2" element={<Grupp2 />} />
      <Route path="/grupp3" element={<Grupp3 />} />
      <Route path="/grupp4" element={<Grupp4 />} />
    </Routes>
  );
}

export default App;
