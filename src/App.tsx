import Mailing from "./pages/mailing/mailing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Management from "./pages/management/management";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mailing />} />"
        <Route path="/gestao" element={<Management />} />
      </Routes>
    </Router>
  );
}
