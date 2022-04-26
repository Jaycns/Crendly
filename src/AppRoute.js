import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Employment from "./Employ/employment";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signUp" element={<Employment />} />
      </Routes>
    </Router>
  );
}
