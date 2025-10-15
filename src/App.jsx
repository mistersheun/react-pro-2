import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbourd from "./components/Dashbourd.jsx";
import Login from "./components/Login.jsx"      


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Dashbourd" element={<Dashbourd />} />
      </Routes>
    </Router>
  );
}
